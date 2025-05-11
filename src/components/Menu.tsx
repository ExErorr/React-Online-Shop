import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import CartDrawerMenu from "./CartDrawerMenu";
import "./Menu.css";
const Menu: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems } = useCart();

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className="menu-container">
      <button
        className="cart-button blue-btn"
        onClick={() => setCartOpen(true)}
      >
        <FaShoppingCart size={20} /> Koszyk{" "}
        {totalQuantity > 0 && `(${totalQuantity})`}
      </button>
      <CartDrawerMenu isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default Menu;
