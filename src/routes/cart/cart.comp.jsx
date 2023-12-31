import CartItem from "../../components/cart-items/cart-items.comp";
import "./cart.styles.scss";

import {
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Brands</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {/* to fetch cart items individually in cartItem component */}
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: Rs {cartTotal}</span>
    </div>
  );
};

export default Cart;
