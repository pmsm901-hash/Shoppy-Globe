import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

function Cart() {

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const grandTotal = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart">

                <div className="empty-cart-icon">
                    🛒
                </div>

                <h2>Your Cart is Empty</h2>

                <p>
                    Add some products to your cart
                    and they will appear here.
                </p>

                <Link
                    to="/products"
                    className="back-products-btn"
                >
                    ← Continue Shopping
                </Link>

            </div>
        );
    }

    return (
        <div className="cart-page">

            <h1 className="cart-title">
                🛒 Shopping Cart
            </h1>

            <Link
                to="/products"
                className="back-products-btn"
            >
                ← Continue Shopping
            </Link>

            <div className="cart-layout">

                {/* Cart Items */}
                <div className="cart-items">

                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                        />
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
                        <span className="free">
                            FREE
                        </span>
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