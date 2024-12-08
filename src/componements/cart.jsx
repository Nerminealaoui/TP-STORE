import React from "react";

const Cart = ({ cart, total, handleAddClick, handleDecreaseClick }) => {
  return (
    <div className="cart">
      <h2>Panier</h2>
      {cart.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        <>
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img
                src={product.imageUrl}
                alt={product.title}
                style={{ width: "50px" }}
              />
              <div>{product.title}</div>
              <div>{product.price} DH</div>
              <div>
                Quantité: {product.quantity}
                <button
                  onClick={() => handleDecreaseClick(product.id)}
                  className="btn btn-secondary btn-sm mx-2"
                >
                  -
                </button>
                <button
                  onClick={() => handleAddClick(product)}
                  className="btn btn-secondary btn-sm"
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <h3>Total: {total} DH</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
