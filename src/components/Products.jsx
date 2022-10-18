import { Product } from "./Product";

export const Products = ({
  productList = [],
  onAddProduct,
  onRemoveProduct
}) => {
  return (
    <ul className="list-group mt-4">
      {productList.map((p) => (
        <Product
          key={p.id}
          product={p}
          onAddProduct={onAddProduct}
          onRemoveProduct={onRemoveProduct}
          isAddedInCart={p.isAdded}
        />
      ))}
    </ul>
  );
};
