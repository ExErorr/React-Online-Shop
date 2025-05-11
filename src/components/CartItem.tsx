import React from "react";
import { useCart } from "../context/CartContext";
import "./CartItem.css";
import QuantityControl from "./Elements/QuantityControl";
import type { ProductType } from "../Types/OrderTypes";

type Props = {
  product: ProductType;
  quantity: number;
  showProductPrice?: boolean;
  showOrderPrice?: boolean;
  editable?: boolean;
};

const CartItem: React.FC<Props> = ({
  product: product,
  quantity,
  showProductPrice = true,
  showOrderPrice = true,
  editable = true,
}) => {
  const { setProductQuantity, removeProduct } = useCart();

  const price = product.price.main + product.price.fractional / 100;
  const total = (price * quantity).toFixed(2);

  return (
    <li className="cart-item">
      <div className="image-placeholder small">Zdjęcie</div>
      <div className="cart-details">
        <div className="header-row">
          <span className="name">{product.name}</span>
          {editable ? (
            <button
              className="remove-button"
              onClick={() => removeProduct(product.id)}
              title="Usuń pozycję"
            >
              ×
            </button>
          ) : null}
        </div>
        <QuantityControl
          quantity={quantity}
          setQuantity={(newQty) => setProductQuantity(product.id, newQty)}
          editable={editable}
        />
        {showProductPrice ? (
          <span className="price">Cena produktu:{price} zł</span>
        ) : null}
        {showOrderPrice ? (
          <span className="price">Koszt zamówienia:{total} zł</span>
        ) : null}
      </div>
    </li>
  );
};

export default CartItem;
