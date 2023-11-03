import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getcarttotal } from "../features/CartSlice";
function Navbar(){
const {totalQuantity,cart}=useSelector(state=>state.allcart)
const dispatch=useDispatch();
useEffect(()=>{
dispatch(getcarttotal())
},[cart])
    return(
        <div className="navbar" id="nav"  >
<div>Mobile Point</div>

<div className="asdf"  style={{display:"flex"}}>
<Link  to="/" style={{color:"darkblue"}}>All Products</Link> &nbsp;
<Link  to="/iphone" style={{color:"darkblue"}}>Iphone</Link> &nbsp;
<Link  to="/samsung" style={{color:"darkblue"}}>Samsung</Link> &nbsp;
</div>

<div>

<Link to="/cart" style={{color:"darkblue"}}>Cart({totalQuantity})</Link>
 <Link to="/" state={{color:"darkblue"}} id="tabbtn"> Tab</Link>   
      </div>

        </div>
    )
}
export default Navbar;