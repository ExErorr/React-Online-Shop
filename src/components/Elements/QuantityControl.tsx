import React from "react";
import "./QuantityControl.css";

type Props = {
  quantity: number;
  setQuantity: (newQuantity: number) => void;
  minQuantity?: number;
  maxQuantity?: number;
  editable?: boolean;
};

const QuantityControl: React.FC<Props> = ({
  quantity,
  setQuantity,
  minQuantity = 1,
  maxQuantity = 99999,
  editable = true,
}) => {
  const increase = () => {
    if (editable && quantity < maxQuantity) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (editable && quantity > minQuantity) setQuantity(quantity - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editable) return;
    const val = e.target.value;
    if (val === "") {
      setQuantity(minQuantity);
    } else {
      const parsed = parseInt(val, 10);
      if (!isNaN(parsed)) {
        if (parsed > maxQuantity) setQuantity(maxQuantity);
        else if (parsed >= minQuantity) setQuantity(parsed);
      }
    }
  };

  return (
    <div className="quantity-control">
      {editable && <button onClick={decrease}>−</button>}
      <input
        type="number"
        min={minQuantity}
        max={maxQuantity}
        value={quantity}
        onChange={handleChange}
        onBlur={() => {
          if (editable && quantity < minQuantity) setQuantity(minQuantity);
        }}
        readOnly={!editable}
        disabled={!editable}
      />
      {editable && <button onClick={increase}>+</button>}
    </div>
  );
};

export default QuantityControl;
