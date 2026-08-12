import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem
} from "../redux/cartSlice";
import { Link } from "react-router-dom";

function Cart() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Calculate total price
  const grandTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <div className="empty-cart-icon">🛒</div>
        <h2>Your Cart is Empty</h2>
        <p>Add some products to your cart and they will appear here.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1 className="cart-title">🛒 Shopping Cart</h1>

      <div className="cart-layout">

        {/* Cart Items */}
        <div className="cart-items">

          {cartItems.map((item) => (

            <div className="cart-item" key={item.id}>

              <div className="cart-image">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                />
              </div>

              <div className="cart-info">

                <h2>{item.title}</h2>

                <p className="cart-price">
                  ₹ {item.price}
                </p>

                <div className="quantity-control">

                  <button
                    onClick={() =>
                      dispatch(decreaseQuantity(item.id))
                    }
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      dispatch(increaseQuantity(item.id))
                    }
                  >
                    +
                  </button>

                </div>

                <p className="item-total">
                  Item Total:
                  <strong>
                    ₹ {(item.price * item.quantity).toFixed(2)}
                  </strong>
                </p>

                <button
                  className="remove-btn"
                  onClick={() =>
                    dispatch(removeItem(item.id))
                  }
                >
                  🗑 Remove
                </button>

              </div>

            </div>

          ))}

        </div>

        {/* Cart Summary */}
        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Products</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>
              ₹ {grandTotal.toFixed(2)}
            </span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span className="free">FREE</span>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <strong>
              ₹ {grandTotal.toFixed(2)}
            </strong>
          </div>
          <Link to="/checkout">
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
          </Link>
          

        </div>

      </div>

    </div>
  );
}

export default Cart;