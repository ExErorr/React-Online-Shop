import React, { useEffect } from "react";
import CartContent from "../CartContent";
import { useCart } from "../../context/CartContext";
import "./CartPage.css";
import NavigateButton from "../Buttons/NavigateButton";
import TotalPrice from "../Elements/TotalPrice";

const OrderConfirmationPage: React.FC = () => {
  const {
    isCartEmpty,
    loadCartFromLocalStorage,
    clearCartFromLocalStorage,
    clearCart,
  } = useCart();

  useEffect(() => {
    loadCartFromLocalStorage();
    clearCartFromLocalStorage();
  }, []);
  const handleBackToProducts = () => {
    clearCart();
  };

  return (
    <div className="cart-page">
      <h1>Zamówienie zostało złożone pomyślnie</h1>

      {isCartEmpty() ? (
        <p>Twój koszyk jest pusty.</p>
      ) : (
        <>
          <CartContent
            editable={false}
            showProductPrice={false}
            showOrderPrice={false}
          />
          <TotalPrice />
        </>
      )}
      <NavigateButton
        link="/"
        label="Kontynnuj zakupy"
        additionalAction={handleBackToProducts}
      />
    </div>
  );
};

export default OrderConfirmationPage;
