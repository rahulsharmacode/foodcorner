import React from "react";

let FoodItems = (props) =>{
    return (<>


<div className='menu_card'>
                {props.item.map((val)=>{
                    let {image,name,price,discription} = val;
                    return(<div className='menu_box'>
                        <img src = {image} className='menu_image' alt='item-image'/>
                        <h3>{name}</h3>
                        <p className='discription'>{discription}</p>
                        <p className='priceTag'>{price}</p>
                        <button>Order Now</button>
                        <p>Depending on number of Orders you can get offers</p>
                    </div>)
                })}
            </div>

    </>)
}


export default FoodItems;