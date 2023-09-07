import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "../src/components/Navbar/CartContext/CartContext";
import Routes from "./routes/Routes";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <CartProvider> 
        <Header />
        <Layout>
          <Routes />
        </Layout>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
