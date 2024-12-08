// export default App;
import React, { useState } from "react";
import Products from "./componements/products";
import Navbar from "./componements/navbar";
import Cart from "./componements/cart";
import "./navbar.css";
const App = () => {
  const [products] = useState([
    {
      id: 1,
      title: "Bracelet beldi pour femme PLAQUE OR",
      price: 10000,
      imageUrl:
        "https://www.marocannuaire.org/image_up/maeva-bijoux-bague_plaque_or_taille_50-bague.oxyd.blanc.jpg",
    },
    {
      id: 2,
      title: "Bracelet jonc - Or blanc et or jaune 18 carats",
      price: 9000,
      imageUrl:
        "https://img.edenly.com/pt/40/feerie-n2-bracelet-jonc-or-blanc-or-jaune-18-carats__5599295_1.png?_gl=1*vbw64m*_gcl_au*MTQ3NTgzNDU4OS4xNzI3OTQzMDk5*FPAU*MTQ3NTgzNDU4OS4xNzI3OTQzMDk5*_ga*NTkxMDc4NDk1LjE3Mjc5NDMxMDA.*_ga_8CPY8KXX7V*MTcyNzk0MzA5OS4xLjEuMTcyNzk0NjAyOC4wLjAuMzgxMzk5NDQ1*_fplc*TlhRR3o4M3N6alFLektxMkdPQXh2YkFRV2ZJZkJBMTc5NUpkV2wlMkZQcktMOXZEa0ZxN3RWdFBSWUJYczNRZHhFRFpReEhsNU5iVDA3WUllYkk3Qm9ON3B2b3JJeXNHJTJCSjV2c0IwR1UyOTJ3NWtiQ3dGQXdPWm5oUWEyV1FjdyUzRCUzRA..",
    },
    {
      id: 3,
      title: "Bracelet Nuances nacre - Or jaune 18 carats",
      price: 3000,
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/595a00fa15d5dbbdbcef3bea/1584522059144-VK3FHISHSX82TJB7MEHM/Poinc%CC%A7on22-bracelet-Nuances-nacre-or18carats-1200x1200.jpg?format=1000w",
    },
    {
      id: 4,
      title: "Bracelet disque ouvert 1 pierre or jaune 9 carats",
      price: 2500,
      imageUrl:
        "https://atelier-amaya.com/media/catalog/product/6/5/65504905-f0eb-4003-a0ad-front.jpg?quality=100&fit=bounds&height=900&width=900",
    },
    {
      id: 5,
      title: "Bracelet beldi pour femme PLAQUE OR",
      price: 10000,
      imageUrl:
        "https://www.marocannuaire.org/image_up/maeva-bijoux-bague_plaque_or_taille_50-bague.oxyd.blanc.jpg",
    },
    {
      id: 6,
      title: "Bracelet jonc - Or blanc et or jaune 18 carats",
      price: 9000,
      imageUrl:
        "https://img.edenly.com/pt/40/feerie-n2-bracelet-jonc-or-blanc-or-jaune-18-carats__5599295_1.png?_gl=1*vbw64m*_gcl_au*MTQ3NTgzNDU4OS4xNzI3OTQzMDk5*FPAU*MTQ3NTgzNDU4OS4xNzI3OTQzMDk5*_ga*NTkxMDc4NDk1LjE3Mjc5NDMxMDA.*_ga_8CPY8KXX7V*MTcyNzk0MzA5OS4xLjEuMTcyNzk0NjAyOC4wLjAuMzgxMzk5NDQ1*_fplc*TlhRR3o4M3N6alFLektxMkdPQXh2YkFRV2ZJZkJBMTc5NUpkV2wlMkZQcktMOXZEa0ZxN3RWdFBSWUJYczNRZHhFRFpReEhsNU5iVDA3WUllYkk3Qm9ON3B2b3JJeXNHJTJCSjV2c0IwR1UyOTJ3NWtiQ3dGQXdPWm5oUWEyV1FjdyUzRCUzRA..",
    },
    {
      id: 7,
      title: "Bracelet Nuances nacre - Or jaune 18 carats",
      price: 3000,
      imageUrl:
        "https://images.squarespace-cdn.com/content/v1/595a00fa15d5dbbdbcef3bea/1584522059144-VK3FHISHSX82TJB7MEHM/Poinc%CC%A7on22-bracelet-Nuances-nacre-or18carats-1200x1200.jpg?format=1000w",
    },
    {
      id: 8,
      title: "Bracelet disque ouvert 1 pierre or jaune 9 carats",
      price: 2500,
      imageUrl:
        "https://atelier-amaya.com/media/catalog/product/6/5/65504905-f0eb-4003-a0ad-front.jpg?quality=100&fit=bounds&height=900&width=900",
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddClick = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setShowCart(true);
  };

  const handleDecreaseClick = (productId) => {
    const existingProduct = cart.find((item) => item.id === productId);
    if (existingProduct.quantity === 1) {
      setCart(cart.filter((item) => item.id !== productId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  return (
    <>
      <Navbar total={cart.length} />
      <div className="app-layout">
        {/* Section Produits */}
        <div className="products-section">
          <Products products={products} handleAddClick={handleAddClick} />
        </div>

        {/* Section Panier */}
        {showCart && (
          <div className="cart-section">
            <Cart
              cart={cart}
              total={calculateTotal()}
              handleAddClick={handleAddClick}
              handleDecreaseClick={handleDecreaseClick}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
