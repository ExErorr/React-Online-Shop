import React from "react";
import CartContent from "../CartContent";
import CartFooter from "../CartFooter";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartPage.css";
import NavigateButton from "../Buttons/NavigateButton";
const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const { isCartEmpty } = useCart();

  const handleGoToSummary = () => {
    navigate("/summary");
    console.log(import.meta.env.BASE_URL);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto", padding: "1rem" }}>
      <h1>Koszyk</h1>
      {isCartEmpty() ? (
        <p>Twój koszyk jest pusty.</p>
      ) : (
        <>
          <CartContent />
          <CartFooter
            onAction={handleGoToSummary}
            actionLabel="Przejdź do podsumowania"
          />
        </>
      )}
      <NavigateButton link="/" label="Wróć do listy produktów" />
    </div>
  );
};

export default CartPage;
