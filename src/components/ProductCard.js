import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../features/CartSlice';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function Pr() {
   const items=useSelector((state)=>state)
console.log(items.allcart.items)
const dispatch=useDispatch();
    return (
    <div>
        <div >
            <div className='mb-3'style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
 {items.allcart.items.map((item,index)=>{
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