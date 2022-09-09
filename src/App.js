import logo from "./logo.svg";
import "./App.css";
import Landing from "./Pages/Landing";
import Buying from "./Pages/Landing/Buying";
import Login from "./Pages/Auth/Login";

//Router
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Products/:productId" element={<Buying />} />
        <Route path="/Auth" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
