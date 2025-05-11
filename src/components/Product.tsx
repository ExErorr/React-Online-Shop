import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Product.css";
import QuantityControl from "./Elements/QuantityControl";
import type { ProductType } from "../Types/OrderTypes";

type Props = {
  product: ProductType;
};

const Product: React.FC<Props> = ({ product: product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="card">
      <div className="image-placeholder">Brak zdjęcia</div>
      <h3>{product.name}</h3>
      <p className="price">
        {product.price.main},
        {product.price.fractional.toString().padStart(2, "0")} zł
      </p>

      <div className="actions">
        <QuantityControl quantity={quantity} setQuantity={setQuantity} />
        <button className="add-cart-button blue-btn" onClick={handleAddToCart}>
          Dodaj do koszyka
        </button>
      </div>
    </div>
  );
};

export default Product;
