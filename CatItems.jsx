import React from "react";

let CatItems = ({category, AllCat}) =>{
    return (<>

<div className='menu_btn'>

                {AllCat.map((currVal)=>{return <>
                    <button onClick={()=>{category(currVal)}}> {currVal} </button>

                </>})}
                {/* <button onClick={()=>{category('breakfast')}}>Breakfast</button>
                <button onClick={()=>{category('lunch')}}>Lunch</button>
                <button onClick={()=>{category('dinner')}}>Dinner</button> */}
                {/* <button  onClick = {()=>{setItem(Menu)}}>All</button> */}
            </div>


    </>)
}


export default CatItems;