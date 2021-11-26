import React, { useState } from "react";
import Menu from './Menu';
import CatItems from './CatItems';
import FoodItems from './FoodItems';

let AllCat = [...new Set(Menu.map((val)=>val.category)),'All']
console.log(AllCat);

let App = () => {

    let [item,setItem] = useState(Menu);
    let category = (catMenu) =>{

        if(catMenu === 'All'){
            setItem(Menu);
            return;
        }
        const updateMenu = Menu.filter((currElem)=>{
            return currElem.category === catMenu;

        });
        setItem(updateMenu);
    }

    return (<>

<h1 className='heading' style={{ textAlign: 'center' }}>Food Corner House</h1><hr />

        <div className='main_body'>
            
           <CatItems  category ={category} AllCat = {AllCat} />

            <FoodItems item={item} />


        </div>

    </>)

}


export default App;