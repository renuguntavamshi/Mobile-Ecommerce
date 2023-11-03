import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../features/CartSlice';

export default function Iphone() {
   const items=useSelector((state)=>state)
console.log(items.allcart.items)
let filt=items.allcart.items;
let filtereditems=filt.filter(item=>{return item.category==="apple"})
console.log(filtereditems)
const dispatch=useDispatch();
    return (
    <div>
        <div >
            <div className='mb-3'style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
 {filtereditems.map((item,index)=>{
    return(
 <div  key={index} style={{margin:"10px",backgroundColor:"white",borderRadius:"10px"}}>
 <div>
   <img src={item.img} className='img' position='top' alt='...' style={{borderRadius:"10px"}} />
   <div className='cardbodyy'>
  
   <h5>     {item.title}</h5>
   
     <h4>
        {item.price}
     </h4>
    
     <button  onClick={()=>{dispatch(addtocart(item))}}>Add to Cart</button>
   </div>
 </div>
 </div>)
 }) 
 }
    </div>
    </div>
    </div>
  );
}