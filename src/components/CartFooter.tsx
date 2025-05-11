import React from "react";
import { useCart } from "../context/CartContext";
import "./CartFooter.css";
import TotalPrice from "./Elements/TotalPrice";

type Props = {
  onAction: () => void;
  actionLabel: string;
};

const CartFooter: React.FC<Props> = ({ onAction, actionLabel }) => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) return null;

  return (
    <div className="cart-footer">
      <TotalPrice />
      <button className="cart-footer-button blue-btn" onClick={onAction}>
        {actionLabel}
      </button>
    </div>
  );
};

export default CartFooter;
