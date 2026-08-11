import { useEffect, useState } from "react";

function useProducts(){
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>
    {
        async function fetchProducts()
        {
            try
            {
                setLoading(true);
                const response=await fetch("https://dummyjson.com/products/");
                if(!response.ok)
                {
                    throw new Error("Falied to Fetch Products");
                }
                const data=await response.json();
                setProducts(data.products);
            }
            catch(err)
            {
                setError(err.message);
            }
            finally
            {
                setLoading(false);
            }
        }
        fetchProducts();
    },[]);
    return {products,loading,error};
}
export default useProducts;