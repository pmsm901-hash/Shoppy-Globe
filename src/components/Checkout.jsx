import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout()
{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const cartItems=useSelector((state)=>state.cart.items);
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        mobno:"",
        address:"",
        city:"",
        pincode:"",
    });
    const[errors,setErrors]=useState({});
    const[orderMessage,setOrderMessage]=useState("");

    //calcuate total
    const grandTotal=cartItems.reduce(
        (total,item)=>total+item.price*item.quantity,0
    );

    //handle input
    function handleChange(e){
        const{name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        });
    }

    //form validation
    function validateForm()
    {
        const newErrors={};
        if(!formData.name.trim())
        {
            newErrors.name="Name is Required";
        }
        if(!formData.email.trim())
        {
            newErrors.email="Email is Required";
        }
        if(!formData.mobno.trim())
        {
            newErrors.mobno="Mobile No is Required";
        }
        if(!formData.address.trim())
        {
            newErrors.address="Address is Required";
        }
        if(!formData.city.trim())
        {
            newErrors.city="City is Required";
        }
        if(!formData.pincode.trim())
        {
            newErrors.pincode="Pincode is Required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    //place order
    function handleSubmit(e)
    {
        e.preventDefault();
        if(!validateForm())
        {
            return;
        }
        //show order message
        setOrderMessage("Order Placed...");

        //empty redux cart
        dispatch(clearCart());

        //redirect to home after 2 second
        setTimeout(()=>{
           navigate("/");
        },2000);
    }

    return(
        <div className="checkout-page">
        <h1>🛒 Checkout</h1>
        <div className="checkout-form">
            <h2>Customer Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" value={formData.name} onChange={handleChange}/>
                    <span className="checkout-error">{errors.name}</span>
                </div>
                  <div className="form-group">
                    <label>E-mail</label>
                    <input type="email" name="email" placeholder="Enter Your Email" value={FormData.email} onChange={handleChange}/>
                    <span className="checkout-error">{errors.email}</span>
                </div>
                <div className="form-group">
                    <label>Mobile No</label>
                    <input type="text" name="mobno" placeholder="Enter Your Mobile No" value={FormData.mobno} onChange={handleChange}/>
                    <span className="checkout-error">{errors.mobno}</span>
                </div>
                 <div className="form-group">
                    <label>Address</label>
                    <textarea name="address" placeholder="Enter Delivery Address" value={FormData.address} onChange={handleChange}/>
                    <span className="checkout-error">{errors.address}</span>
                </div>
                <div className="form-group">
                    <label>City</label>
                    <input type="text" name="city" placeholder="Enter City" value={FormData.city} onChange={handleChange}/>
                    <span className="checkout-error">{errors.city}</span>
                </div>
                <div className="form-group">
                    <label>Pincode</label>
                    <input type="text" name="pincode" placeholder="Enter Pincode" value={FormData.pincode} onChange={handleChange}/>
                    <span className="checkout-error">{errors.pincode}</span>
                </div>
                <button type="submit" className="place-order-btn"> 🛍️ Place Order</button>
            </form>

            {/* //order success message */}
            {orderMessage &&(
                <div className="order-success">
                     ✅ {orderMessage}
                     <p>Redirecting to Home.....</p>
                </div>)}
        </div>
        {/* //order summary */}
        <div className="checkout-summary">
            <h2>Order Summary</h2>
            {cartItems.map((item)=>(
                <div className="checkout-product" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} loading="lazy"/>
                    <div>
                        <h3>{item.title}</h3>
                        <p> ₹ {item.price} × {item.quantity}</p>
                        <strong> ₹ {(item.price * item.quantity).toFixed(2)}</strong>
                    </div>
                </div>
            ))}
            <hr/>
            <div className="checkout-total">
                <span>Total</span>
                <strong> ₹ {grandTotal.toFixed(2)}</strong>
            </div>
        </div>

        </div>
    )
}
export default Checkout;