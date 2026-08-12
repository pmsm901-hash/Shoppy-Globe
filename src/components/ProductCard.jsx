import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../redux/cartSlice";

function ProductCard({ product }) {
  const dispatch=useDispatch();
  function handleAddToCart(){
    dispatch(addItem(product))
  }
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} loading="lazy"/>

      <div className="card-body">
        <h3>{product.title}</h3>

        <p>{product.category}</p>

        <h4>₹ {product.price}</h4>
<button
  className="add-cart-btn"
  onClick={() => dispatch(addItem(product))}
>
  🛒 Add to Cart
</button>
        <Link to={`/products/${product.id}`}>
          <button className="btn-view">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;