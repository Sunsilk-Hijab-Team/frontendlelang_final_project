import {BrowserRouter , Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './pages/Home/Home';

//seller pages
import SellerHome from './pages/seller/Home/Home'
import ProductDetail from './pages/Product/Product'
import AddProduct from './pages/seller/Add Product/AddProduct';

//buyer pages
import BuyerHome from './pages/buyer/Home/Home';
import BuyerProduct from './pages/buyer/product/Product';
import BuyerLogin from './pages/buyer/product/BeforeLogin/Before';
import BuyerSent from './pages/buyer/product/Sent/Sent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* seller */}
          <Route path="/seller/home" element={<SellerHome />} />
          <Route path="/seller/add-product" element={<AddProduct />} />
          <Route path="/jam-tangan" element={<ProductDetail />} />
          
          {/* buyer */}
          <Route path="/buyer/home" element={<BuyerHome/>}/>
          <Route path="/buyer/logged/product" element={<BuyerProduct/>}/>
          <Route path="/buyer/product" element={<BuyerLogin/>}/>
          <Route path="/buyer/logged/sent" element={<BuyerSent/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
