import React from "react";

const Product = ({ product, handleAddClick }) => {
  const { imageUrl, title, price } = product;

  return (
    <div className="col-md-6 col-lg-3">
      <div className="card">
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Prix : {price} DH</p>
          <button className="btn btn-primary d-block" onClick={handleAddClick}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
