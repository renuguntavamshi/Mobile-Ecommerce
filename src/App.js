import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import CartPage from './components/CartPage';
import Iphone from './components/Iphone';
import Samsung from './components/Samsung';
function App() {
  return (
    <BrowserRouter>
    <div>
  
   <Navbar />
   <Routes>
    <Route exact path="/" element={<ProductCard />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/iphone" element={<Iphone />} />
    
    <Route path="/samsung" element={<Samsung />} />

   </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
