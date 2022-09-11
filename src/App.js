import logo from "./logo.svg";
import "./App.css";
import Landing from "./Pages/Landing";
import Buying from "./Pages/Landing/Buying";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import ForgetPassword from "./Pages/Auth/ForgetPassword";

//authcontext
import AuthProvider from "./Context/AuthContext";

//Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Products/:productId" element={<Buying />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<SignUp />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
