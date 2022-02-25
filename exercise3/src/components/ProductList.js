import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList(props) {
    return (
        <div className="productContainer">
            {props.products.filter(product => product.title.toLowerCase().includes(props.searchTerm.toLowerCase())).map(p => 
                <ProductItem key={p.id} title={p.title} price={p.price} rating={p.rating} image={p.image}/>)}
        </div>
    )
}