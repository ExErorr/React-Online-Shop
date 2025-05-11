import React from "react";
import { useCart } from "../context/CartContext";
import "./CartDrawerMenu.css";
import { useNavigate } from "react-router-dom";
import CartContent from "./CartContent";
import CartFooter from "./CartFooter";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawerMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { isCartEmpty } = useCart();
  const handleGoToCart = () => {
    onClose();
    navigate("/cart");
  };

  return (
    <>
      <div className={`cart-drawer-menu ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Koszyk</h2>
          <button
            className="cart-drawer-menu-button blue-btn"
            onClick={onClose}
          >
            Zamknij
          </button>
        </div>
        {isCartEmpty() ? (
          <p>Twój koszyk jest pusty.</p>
        ) : (
          <div className="cart-drawer-menu-content">
            <CartContent />
            <div className="cart-footer-container">
              <CartFooter
                onAction={handleGoToCart}
                actionLabel="Przejdź do Koszyka"
              />
            </div>
          </div>
        )}
      </div>
      {isOpen && <div className="backdrop" onClick={onClose}></div>}
    </>
  );
};

export default CartDrawerMenu;
