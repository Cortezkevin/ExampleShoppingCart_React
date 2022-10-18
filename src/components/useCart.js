import { useEffect, useReducer } from "react";
import { cartReducer } from "./cartReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

export const useCart = () => {
  const [products, dispatch] = useReducer(cartReducer, [], init);

  const handleAddProduct = (product) => {
    dispatch({
      type: "Add",
      payload: {
        ...product,
        isAdded: true
      }
    });
  };

  const handleRemoveProduct = (id) => {
    dispatch({
      type: "Remove",
      payload: id
    });
  };

  const handleCleanCart = () => {
    dispatch({
      type: "Clean"
    });
  };

  const calculateTotal = () => {
    let total = 0;
    products.forEach((p) => (total += p.price));
    return total;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  return {
    products,
    handleAddProduct,
    handleRemoveProduct,
    handleCleanCart,
    productsCount: products.length,
    cartTotal: calculateTotal()
  };
};
