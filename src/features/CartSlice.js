import { createSlice } from "@reduxjs/toolkit";
import productData  from '../productData'
const initialState={
    cart:[],
    items:productData,
    totalQuantity:0,
    totalPrice:0
};
const cartSlice=createSlice({
name:"cart",
initialState,
reducers:{
addtocart:(state,action)=>{

    let find=state.cart.findIndex((item)=> item.id===action.payload.id )
    if(find>=0){
        state.cart[find].quantity+=1;
    }
    else{
    state.cart.push(action.payload)
  }
 },
 getcarttotal:(state)=>{
    let {totalPrice,totalQuantity}=state.cart.reduce(
        (carttotal,cartitem)=>{
            console.log("carttotal",carttotal);
            console.log("cartitem",cartitem);
            const {price,quantity}=cartitem;
            console.log(price,quantity);
            const itemtotal=price*quantity;
            carttotal.totalPrice+=itemtotal;
            carttotal.totalQuantity+=quantity;
            return carttotal;
        },
        {
            totalPrice:0,
            totalQuantity:0
        }
    );
    state.totalPrice=parseInt(totalPrice.toFixed(2));
    state.totalQuantity=totalQuantity;
 },
 removeitem:(state,action)=>{
    state.cart=state.cart.filter((item)=>item.id!==action.payload)
 },
 increaseitemquantity:(state,action)=>{
    state.cart=state.cart.map((item)=>{
        if(item.id===action.payload){
            return {...item,quantity:item.quantity+1}
        }
        return item
    })
 },
 decreaseitemquantity:(state,action)=>{
    state.cart=state.cart.map((item)=>{
        console.log(item.quantity);
        if(item.quantity>1){

            if(item.id===action.payload){
            return {...item,quantity:item.quantity-1}
        }
    }
        return item
    })
 }
},
});
export  const {addtocart,getcarttotal,removeitem,increaseitemquantity,decreaseitemquantity}= cartSlice.actions; 
export default cartSlice.reducer;