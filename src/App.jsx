import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>    
  );
}

export default App;
