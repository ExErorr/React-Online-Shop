import React from "react";
import CartContent from "../CartContent";
import { useCart } from "../../context/CartContext";
import "./CartPage.css";
import CartFooter from "../CartFooter";
import NaviateButton from "../Buttons/NavigateButton";

const OrderSummaryPage: React.FC = () => {
  const { cartItems, isCartEmpty } = useCart();

  const handleConfirmOrder = () => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    window.location.href = `${import.meta.env.BASE_URL}confirmation`;
  };

  return (
    <div className="cart-page">
      <h1>Podsumowanie zamówienia</h1>

      {isCartEmpty() ? (
        <p>Twój koszyk jest pusty.</p>
      ) : (
        <>
          <CartContent editable={false} />
          <CartFooter
            onAction={handleConfirmOrder}
            actionLabel="Złóż zamówienie"
          />
        </>
      )}
      <NaviateButton link="/cart" label="Wróć do koszyka" />
    </div>
  );
};

export default OrderSummaryPage;
