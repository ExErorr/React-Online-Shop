import { Routes, Route } from "react-router-dom";
import ProductPage from "./components/Pages/ProductPage";
import { CartProvider } from "./context/CartContext";
import "./App.css";
import CartPage from "./components/Pages/CartPage";
import OrderSummaryPage from "./components/Pages/OrderSummaryPage";
import OrderConfirmationPage from "./components/Pages/OrderConfirmationPage";

const AppContent: React.FC = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/summary" element={<OrderSummaryPage />} />
        <Route path="/confirmation" element={<OrderConfirmationPage />} />
      </Routes>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
