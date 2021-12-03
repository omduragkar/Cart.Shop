import React from 'react'
import Filter from '../../components/filter/Filter';
import ProductS from '../../components/Product/ProductS';
import {CartState} from "../../context/Context";
import "./Home.css"
const Home = () => {
    const {state:{products}, 
    prodstate: { byStock, byFastDelivery, sort, byRating, searchQuery },} = CartState()
    const transformProducts = () => {
        let sortedProducts = products;
    
        if (sort) {
          sortedProducts = sortedProducts.sort((a, b) =>
            sort === "lowToHigh" ? a.price - b.price : b.price - a.price
          );
          return sortedProducts;
        }
        
        if (!byStock) {
            sortedProducts = sortedProducts.filter((prod) => prod.inStock);
            return sortedProducts;
        }
        
        if (byFastDelivery) {
            sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
            return sortedProducts;
        }
        
        if (byRating) {
            sortedProducts = sortedProducts.filter(
                (prod) => prod.ratings >= byRating
            );
            return sortedProducts;
        }
        
        if (searchQuery) {
            sortedProducts = sortedProducts.filter((prod) =>
            prod.name.toLowerCase().includes(searchQuery)
            );
            return sortedProducts;
        }
    
        // return sortedProducts;
      };
    console.log(transformProducts);
    return (
        <div className='home'>
            <Filter/>
            <div className='productContainer'>
                {
                    transformProducts().map((prod)=>{
                        return <ProductS prod={prod} key={prod.id}/>
                    })
                }
            </div>

        </div>
    )
}

export default Home
