import { Link, useParams } from "react-router-dom";
import useFetchProduct from "../hooks/useFetchProduct";

function ProductDetails() {
  const { id } = useParams();
  console.log("id=>", id);
  const { product, loading, error } = useFetchProduct(id);
  console.log("producst=>", product);
  console.log("loading=>", loading);
  console.log("error=>", error);
  //  loading check
  if (loading) {
    return <h2 className="loading">Loading...</h2>;
  }

  //  error check
  if (error) {
    return (
      <div className="error-box">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="details-card">
      <img src={product.thumbnail} alt={product.title} />

      <div className="details-content">
        <h1>{product.title}</h1>

        <h3>{product.brand}</h3>

        <h2>₹ {product.price}</h2>

        <p>{product.description}</p>

        <h4>⭐ {product.rating}</h4>

        <p>Stock : {product.stock}</p>

        <Link to="/products">
          <button className="btn-back">Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;
