export const Product = ({
  product,
  onAddProduct,
  onRemoveProduct,
  isAddedInCart
}) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <h4>{product.name}</h4>
      <h3>S/ {product.price}</h3>
      {!isAddedInCart ? (
        <button
          onClick={() =>
            onAddProduct({
              id: new Date().getTime() * 1.5,
              name: product.name,
              price: product.price,
              isAdded: false
            })
          }
          className="btn btn-outline-primary"
        >
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      ) : (
        <button
          onClick={() => onRemoveProduct(product.id)}
          className="btn btn-outline-danger"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      )}
    </li>
  );
};
