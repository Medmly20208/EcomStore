import React, { useContext, useState, useEffect } from "react";

import { Auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  getDoc,
  updateDoc,
  setDoc,
  doc,
} from "firebase/firestore";

const AuthCtx = React.createContext();

export const useAuth = () => {
  return useContext(AuthCtx);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [ctxloading, setIsLoading] = useState(true);
  const [CartProducts, setCartProducts] = useState([]);
  let StoreDataBase = getFirestore();

  const updateCartItem = async (operation, ProductName) => {
    let Products = [];

    const ProductRef = doc(StoreDataBase, "Cart", currentUser.uid);

    const docSnap = await getDoc(ProductRef);

    if (docSnap.exists()) {
      Products = docSnap.data().CartProducts;
    } else {
      return;
    }

    Products.forEach((Product) => {
      if (Product.productName === ProductName) {
        if (operation === "+") {
          Product.amount = Product.amount + 1;
        } else if (operation === "-") {
          if (Product.amount == 1) {
            return deleteFromCart(Product.productName);
          }
          Product.amount = Product.amount - 1;
        } else {
          return;
        }
      }
    });
    await setDoc(ProductRef, {
      CartProducts: Products,
    });

    setCartProducts(Products);
  };

  const deleteFromCart = async (productName) => {
    let Products = [];

    const ProductRef = doc(StoreDataBase, "Cart", currentUser.uid);

    const docSnap = await getDoc(ProductRef);

    if (docSnap.exists()) {
      Products = docSnap.data().CartProducts;
    } else {
      return;
    }

    Products = Products.filter((element) => {
      if (element.productName === productName) {
        return false;
      }
      return true;
    });

    await setDoc(ProductRef, {
      CartProducts: Products,
    });
    setCartProducts(Products);
  };
  const fetchCart = async () => {
    let Products = [];
    const ProductRef = doc(StoreDataBase, "Cart", currentUser.uid);

    const docSnap = await getDoc(ProductRef);

    if (docSnap.exists()) {
      setCartProducts(docSnap.data().CartProducts);
    } else {
      return;
    }
  };

  const AddToCart = async ({
    productName,
    productImage,
    productPrice,
    amount,
  }) => {
    let Products = [];
    const ProductRef = doc(StoreDataBase, "Cart", currentUser.uid);

    const docSnap = await getDoc(ProductRef);

    if (docSnap.exists()) {
      Products = docSnap.data().CartProducts;
    } else {
      await setDoc(doc(StoreDataBase, "Cart", currentUser.uid), {
        id: currentUser.uid,
        CartProduct: [],
      });
    }
    let Found = false;
    Products.forEach((element) => {
      if (element.productName === productName) {
        element.amount = element.amount + 1;
        Found = true;
      }
    });

    if (!Found) {
      Products.push({
        productName,
        productImage,
        productPrice,
        amount: 1,
      });
    }

    await setDoc(ProductRef, {
      CartProducts: Products,
    });

    setCartProducts(Products);
  };
  async function signup(email, password) {
    return createUserWithEmailAndPassword(Auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(Auth, email, password);
  }
  function signout() {
    return signOut(Auth);
  }
  function resetPassword(email) {
    return sendPasswordResetEmail(Auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    ctxloading,
    CartProducts,
    signup,
    login,
    signout,
    resetPassword,
    AddToCart,
    deleteFromCart,
    fetchCart,
    updateCartItem,
  };

  return (
    <AuthCtx.Provider value={value}>{!ctxloading && children}</AuthCtx.Provider>
  );
};

export default AuthProvider;
