import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { CartItemType, ProductType } from "../Types/OrderTypes";

type CartContextType = {
  cartItems: CartItemType[];
  totalPrice: number;
  addToCart: (ProductType: ProductType) => void;
  removeFromCart: (productId: number) => void;
  removeProduct: (productId: number) => void;
  setProductQuantity: (productId: number, quantity: number) => void;
  isCartEmpty: () => boolean;
  clearCart: () => void;
  loadCartFromLocalStorage: () => void;
  clearCartFromLocalStorage: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    updateTotalPrice();
  }, [cartItems]);

  const loadCartFromLocalStorage = () => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  };
  const clearCartFromLocalStorage = () => {
    localStorage.removeItem("cartItems");
  };

  const updateTotalPrice = () => {
    const total = cartItems.reduce((sum, item) => {
      const price =
        item.product.price.main + item.product.price.fractional / 100;
      return sum + price * item.quantity;
    }, 0);
    setTotalPrice(total);
  };
  const addToCart = (product: ProductType) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product: product, quantity: 1 }];
      }
    });
  };
  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };
  const removeProduct = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };
  const setProductQuantity = (productId: number, quantity: number) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        return prevItems.filter((item) => item.product.id !== productId);
      }

      const product = prevItems.find(
        (item) => item.product.id === productId
      )?.product;

      if (!product) {
        return prevItems;
      }

      return prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      );
    });
  };
  const isCartEmpty = () => {
    return cartItems.length === 0;
  };
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addToCart,
        removeFromCart,
        removeProduct,
        setProductQuantity,
        isCartEmpty: isCartEmpty,
        clearCart: clearCart,
        loadCartFromLocalStorage: loadCartFromLocalStorage,
        clearCartFromLocalStorage: clearCartFromLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
