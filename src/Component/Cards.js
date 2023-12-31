import { useState } from 'react';
import './Cards.css'
function Cards({id,image,info,price,name,removeTours}){
    
    const[readmore,setReadmore]=useState(false);
    const description = readmore ? info:`${info.substring(0,200)}...`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }

return (
    <div className='card'>
        <img src={image} className='image'></img>
        <div className='tour-info'>
            <div className='tour-details'>
            <h4 className='tour-price'>₹{price}</h4>
            <h4 className='tour-name'>{name}</h4>
        </div>
            <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read \More`}
                    </span>
                </div>
            </div>


        <button onClick={()=>removeTours(id)} className='btn-red'>Not Interseted</button>
        
    </div>
);
}
export default Cards;