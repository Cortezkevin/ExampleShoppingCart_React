import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Products } from "./Products";

export const ShoppingCart = () => {
  const {
    products,
    productsCount,
    cartTotal,
    handleRemoveProduct,
    handleCleanCart
  } = useContext(CartContext);

  console.log(cartTotal);

  return (
    <>
      <h3>
        ShoppingCart - products: {productsCount} - total S/{cartTotal} - vacear
        todo{" "}
        <i onClick={() => handleCleanCart()} className="fa-solid fa-trash"></i>
      </h3>
      <Products productList={products} onRemoveProduct={handleRemoveProduct} />
    </>
  );
};
