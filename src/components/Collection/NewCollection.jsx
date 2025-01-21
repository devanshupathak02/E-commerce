import React from 'react'
import './NewCollection.css'
import all_product from '../Assets/NewCollections'
import Item from '../Item/Item'


export const NewCollection = () => {
  return (
    <div className='new-collection'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collection">
            {all_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>

    </div>
  )
}
