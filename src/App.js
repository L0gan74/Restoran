import React from "react";

import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Card from "./components/Card";
import Delievery from "./components/Delivery";
import TermsOfDelivery from "./components/TermsOfDelivery/TermsOfDelivery";
import Basket from "./components/Basket/Basket";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/card" element={<Card />} />
        <Route path="/delievery" element={<Delievery />} />
        <Route path="/card/:id" element={<Card />} />
        <Route path="/TermsOfDelivery" element={<TermsOfDelivery />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
