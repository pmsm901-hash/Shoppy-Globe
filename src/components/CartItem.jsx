import { useDispatch } from "react-redux";
import {
    decreaseQuantity,
    increaseQuantity,
    removeItem
} from "../redux/cartSlice";

function CartItem({ item }) {

    const dispatch = useDispatch();

    return (
        <div className="cart-item">

            {/* Product Image */}
            <div className="cart-image">
                <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                />
            </div>

            {/* Product Information */}
            <div className="cart-info">

                <h2>{item.title}</h2>

                <p className="cart-price">
                    ₹ {item.price}
                </p>

                {/* Quantity */}
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

                {/* Item Total */}
                <p className="item-total">
                    Item Total:
                    <strong>
                        ₹ {(item.price * item.quantity).toFixed(2)}
                    </strong>
                </p>

                {/* Remove */}
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
    );
}

export default CartItem;