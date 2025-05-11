import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";
import "./CartContent.css";
type Props = {
  showProductPrice?: boolean;
  showOrderPrice?: boolean;
  editable?: boolean;
};
const CartContent: React.FC<Props> = ({
  showProductPrice,
  showOrderPrice,
  editable,
}) => {
  const { cartItems } = useCart();
  return (
    <div className="cart-content">
      <ul className="cart-list">
        {cartItems.map((item) => (
          <CartItem
            key={item.product.id}
            product={item.product}
            quantity={item.quantity}
            showProductPrice={showProductPrice}
            showOrderPrice={showOrderPrice}
            editable={editable}
          />
        ))}
      </ul>
    </div>
  );
};

export default CartContent;
