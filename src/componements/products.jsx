import React from "react";
import Product from "./product";

const Products = ({ products, handleAddClick }) => {
  return (
    <main className="container pt-3">
      <div className="row g-3">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddClick={() => handleAddClick(product)}
          />
        ))}
      </div>
    </main>
  );
};
git;

export default Products;
