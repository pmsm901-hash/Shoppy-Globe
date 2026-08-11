import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredProducts } from "../redux/productSelectors";
import { setProduts } from "../redux/productSlice";
import Searchbar from "./Searchbar";

function ProductList() {

  const dispatch=useDispatch();

  const filteredProducts=useSelector(selectFilteredProducts);

  const { products, loading, error } = useProducts();

  //store fetched products in redux
  if(products.length > 0 && filteredProducts.length === 0)
  {
    dispatch(setProduts(products));
  }

  if (loading) {
    return <h2>Loading Products...</h2>;
  }
 
  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="container">
      <Searchbar/>
      <div className="product-grid">
      
     {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))

        ) : (

          <h2>No Products Found</h2>

        )}
      

    </div>
    </div>
    
  );
}

export default ProductList;