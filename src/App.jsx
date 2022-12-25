import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pegas/Cart";
import Header from "./Pegas/Header";
import Home from "./Pegas/Home";
const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
};

export default App;
