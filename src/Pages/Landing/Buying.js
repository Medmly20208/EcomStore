import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

//firebase
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  getDoc,
  doc,
} from "firebase/firestore";

//componentts
import CheckOutForm from "./CheckOutForm.js";

const Buying = () => {
  const [productDetails, setProductDetails] = useState(null);

  const firebaseConfig = {
    apiKey: "AIzaSyB8kg_O4JjDBxyb6fEnYCBR3VbmgiZfrRw",
    authDomain: "ecomstoer.firebaseapp.com",
    databaseURL: "https://ecomstoer-default-rtdb.firebaseio.com",
    projectId: "ecomstoer",
    storageBucket: "ecomstoer.appspot.com",
    messagingSenderId: "582716717051",
    appId: "1:582716717051:web:243bf9bbb8e46d546dbd5e",
    measurementId: "G-WHFMMS8MJV",
  };
  const { productId } = useParams();

  //init firebsae app
  initializeApp(firebaseConfig);

  //init store
  let StoreDataBase = getFirestore();

  //collection ref

  const fetchProductById = async () => {
    const docRef = doc(StoreDataBase, "MenProducts", productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProductDetails(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  useEffect(() => {
    fetchProductById();
  }, []);

  return productDetails === null ? (
    <></>
  ) : (
    <div className="w-screen h-fit max-w-[100%] flex flex-col justify-center items-center p-6">
      <CheckOutForm productDetails={productDetails}></CheckOutForm>
    </div>
  );
};

export default Buying;
