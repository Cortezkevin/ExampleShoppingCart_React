import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Products } from "./Products";

const productList = [
  {
    id: 1346,
    name: "Arroz",
    price: 200.0,
    isAdded: false
  },
  {
    id: 3645,
    name: "Pollo",
    price: 152.0,
    isAdded: false
  }
];

export const Catalogue = () => {
  const { products, handleAddProduct } = useContext(CartContext);
  console.log(products);

  return (
    <>
      <h3>Catalogue</h3>
      <Products productList={productList} onAddProduct={handleAddProduct} />
    </>
  );
};
