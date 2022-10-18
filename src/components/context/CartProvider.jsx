import { useCart } from "../useCart";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const data = useCart();

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
