import { Link } from "react-router-dom";

function Hero(){
    
    return(
        <section className="hero">
            <div className="hero-content">
            <h1>Welcome to Shoppy Globe</h1>
        
            <p>
                 Discover the latest products at unbeatable prices. Shop electronics,
            fashion, accessories, and much more—all in one place.
            </p>
            <div className="hero-features">
                <span>🚚 Free Shipping</span>
          <span>🔒 Secure Payment</span>
          <span>🔄 Easy Returns</span>
          </div>
           <Link to='/products'>
            <button className="hero-btn">Shop Now</button>
            </Link>
            </div>
            <div className="hero-image">
                <img
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=700"
          alt="Shopping Banner"
        />
            </div>
           
        </section>
    )
}
export default Hero;