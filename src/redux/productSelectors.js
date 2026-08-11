export const selectProducts = (state)=>
    state.products.items;


export const selectSearch =(state)=>
    state.products.search;

 //getting fitered  search products

 export const selectFilteredProducts =(state)=>{
    const products=state.products.items;
    const search= state.products.search.toLowerCase().trim();
    if(!search)
    {
        return products;
    }
    return products.filter((product)=>
    product.title.toLowerCase().includes(search)||
    product.brand?.toLowerCase().includes(search));
 }