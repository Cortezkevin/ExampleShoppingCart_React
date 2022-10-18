import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Catalogue } from "./components/Catalogue";
import { CartContext } from "./components/context/CartContext";
import { Menu } from "./components/Menu";
import { ShoppingCart } from "./components/ShoppingCart";
import "./styles.css";

export default function App() {
  const { productsCount, cartTotal } = useContext(CartContext);

  return (
    <>
      <h1>ShoppingCartApp</h1>
      <i className="fa-solid fa-cart-shopping">
        ( {productsCount} )( s/{cartTotal} )
      </i>
      <Menu />
      <Routes>
        <Route path="/home" element={<h1>Home</h1>} />
        <Route path="catalogue" element={<Catalogue />} />
        <Route path="cart" element={<ShoppingCart />} />
      </Routes>
    </>
  );
}
