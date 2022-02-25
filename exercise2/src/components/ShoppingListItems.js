import React from 'react'

export default function ShoppingListItems(props) {
    return <div>
        <ul>
            { props.listItems.map((item, index) => {
                return <li key = { index }><div>{ item.qty } { item.measurement } { item.name }</div></li>
            })}
        </ul>
    </div>
}