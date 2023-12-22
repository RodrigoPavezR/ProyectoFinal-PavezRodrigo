import { Cart, Products } from "./components";
import { Checkout } from "./components/Checkout/Checkout";
import { NavBar } from "./components/NavBar/NavBar";
import { Nosotros } from "./components/Nosotros/Nosotros";
import { CartContextProvider } from "./context/CartContext";
import { FirebaseContextProvider } from "./context/FirebaseContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    
    <FirebaseContextProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
         
          <Routes>
            <Route path="/" element={<>
              <Products />
              <Cart />
              <Checkout />
              </> }/>
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
         
        </BrowserRouter>
      </CartContextProvider>
    </FirebaseContextProvider>
  );
};