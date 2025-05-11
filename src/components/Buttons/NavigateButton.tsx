import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavigateButton.css";
type Props = {
  link: string;
  label: string;
  additionalAction?: () => void;
};
const NavigateButton: React.FC<Props> = ({ link, label, additionalAction }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
    if (additionalAction) additionalAction();
  };

  return (
    <button className="navigate-to-link-button" onClick={() => handleClick()}>
      {label}
    </button>
  );
};

export default NavigateButton;
