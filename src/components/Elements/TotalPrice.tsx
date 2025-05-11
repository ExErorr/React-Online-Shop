import React from "react";
import "./TotalPrice.css";
import { useCart } from "../../context/CartContext";

const TotalPrice: React.FC = () => {
  const { totalPrice } = useCart();

  return (
    <div className="total-cart-price">
      <strong>Łącznie:</strong> {totalPrice.toFixed(2)} zł
    </div>
  );
};

export default TotalPrice;
