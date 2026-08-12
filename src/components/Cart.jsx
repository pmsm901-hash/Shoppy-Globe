import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeItem } from "../redux/cartSlice";

function Cart()
{
    const dispatch=useDispatch();
    const cartItems=useSelector(
        (state)=>state.cart.items
    );
    if(cartItems.length === 0)
    {
        return(
        <div className="empty-cart">
            <h2>🛒 Your Cart is Empty</h2>
        </div>)
    }
    return(
    <div className="cart-container">
        <h1>Shopping Cart</h1>
        {cartItems.map((item)=>(
            <div className="cart-item" key={item.id}>
                <img src={item.thumbnail} alt={item.title}/>
            
            <div className="cart-info">
            <h2>{item.title}</h2>
            <p>₹ {item.price}</p>
            <div className="quantity-control">
                <button onClick={()=>dispatch(decreaseQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={()=>dispatch(increaseQuantity(item.id))}>+</button>
            </div>
            <p> Total: ₹ {(item.price * item.quantity).toFixed(2)}</p>
            <button className="remove-btn" onClick={()=>dispatch(removeItem(item.id))}> 🗑 Remove</button>
            </div>
            </div>
        ))}
    </div>);
}
export default Cart;