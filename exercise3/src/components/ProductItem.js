import React from 'react'

export default function ProductItem(props) {
    return (
        <div className="productItem">
            <img src={props.image}/>
            <div className="title">{props.title}</div>
            <div className="price">$ {props.price}</div>
            <div className="rating">Rating: {props.rating} / 5</div>
        </div>
    )
}