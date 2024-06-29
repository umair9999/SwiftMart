import { useCart } from "../custom hooks/useCart";

export const addToCart = (product) => {
  useCart.getState().addToCart(product);
};

export const removeFromCart = (productId) => {
  useCart.getState().removeFromCart(productId);
};

export const clearCart = () => {
  useCart.getState().clearCart();
};
