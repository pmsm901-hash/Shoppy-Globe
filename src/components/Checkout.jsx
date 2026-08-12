function Checkout()
{
    return(
        <div className="checkout-page">
        <h1>🛒 Checkout</h1>
        <div className="checkout-form">
            <h2>Customer Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" value={FormData.name} onChange={handleChange}/>
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
                <button type="submit" className="place-order-info"> 🛍️ Place Order</button>
            </form>
        </div>

        </div>
    )
}
export default Checkout;