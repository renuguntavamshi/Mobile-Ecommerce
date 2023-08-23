import { useSelector,useDispatch } from "react-redux";
import { getcarttotal,removeitem,increaseitemquantity,decreaseitemquantity } from "../features/CartSlice";
import { useEffect } from "react";
function CartPage(){
    const {cart,totalQuantity,totalPrice}=useSelector(state=>state.allcart);

    const dispatch=useDispatch();
useEffect(()=>{
    dispatch(getcarttotal());

},[cart])
    return(
        <div>
<section className="h-100 gradient-custom">
  <div className="container py-5">
    <div className="row d-flex justify-content-center my-4">
      <div className="col-md-8">
        <div className="card mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Cart -{cart.length} {cart.length>1?"items":"item"} </h5>
          </div>
          <div className="card-body">
          {/*  <!-- Single item --> */}
         {cart.map((data,index)=>{
            return(
                <div className="row">
                <div className="col-lg-3 col-md-12 mb-4 mb-lg-0 card">
                  {/* <!-- Image --> */}
                  <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                    <img src={data.img}
                      className="w-100" alt="Blue Jeans Jacket" />
                    <a href="#!">
                      <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.2)"}}></div>
                    </a>
                  </div>
                  {/* <!-- Image --> */}
                </div>
  
                <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                  {/* <!-- Data --> */}
                  <p><strong>{data.title}</strong></p>

                  <button type="button"
                   className="btn btn-primary btn-sm me-1 mb-2" 
                   data-mdb-toggle="tooltip"
                    title="Remove item"
                    onClick={()=>{dispatch(removeitem(data.id))}}
                    >
                    <i className="fas fa-trash"></i>
                  </button>
                 
                  {/* <!-- Data --> */}
                </div>
  
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                  {/* <!-- Quantity --> */}
                  <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
                    <button className="btn btn-primary px-3 me-2"
                     onClick={()=>{
                        dispatch(decreaseitemquantity(data.id))}}
                     >
                      <i className="fas fa-minus"></i>
                    </button>
  
                    <div className="form-outline">
                      <input id="form1" min="0" name="quantity"
                       value={data.quantity}
                       type="number" className="form-control" />
                      <label className="form-label" for="form1">Quantity</label>
                    </div>
  
                    <button className="btn btn-primary px-3 ms-2"
                     onClick={()=>{dispatch(increaseitemquantity(data.id))}}>
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  {/* <!-- Quantity --> */}
  
                  {/* <!-- Price --> */}
                  <p className="text-start text-md-center">
                    <strong>{data.price}</strong>
                  </p>
                  {/* <!-- Price --> */}
                </div>
              </div>
  // row ends here 
            )
         })  
    
}
          {/* { <!-- Single item -->} */}

            <hr className="my-4" />

          {/* { <!-- Single item -->} */}
            <div className="row">
           

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                {/* <!-- Quantity --> */}
                
                
              </div>
            </div>
          {/* { <!-- Single item -->} */}
          </div>
        </div>
       
      </div>
      <div className="col-md-4">
        <div className=" mb-4">
          <div className="card-header py-3">
            <h5 className="mb-0">Summary</h5>
          </div>
          <div className="">
            <ul className="list-group list-group-flush">
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                TotalQuantity
                <span>{totalQuantity}</span>
              </li>
            
              <li
                className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
            
                </div>
                <span><strong>{totalPrice}</strong></span>
              </li>
            </ul>

            <button type="button" className="btn btn-primary btn-lg btn-block">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    )
}
export default CartPage;