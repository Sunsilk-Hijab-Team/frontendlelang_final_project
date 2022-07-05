import {BrowserRouter , Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './pages/Home/Home';
import SellerHome from './pages/seller/Home/Home'
import ProductDetail from './pages/ProductDetails/ProductDetails'
import AddProduct from './pages/seller/Add Product/AddProduct';
import ProductList from './pages/seller/Dashboard/ProductList/ProductList';
import Profile from './pages/seller/Dashboard/Profile/Profile';
import Favorites from './pages/seller/Dashboard/Favorites/Favorites';
import SoldProduct from './pages/seller/Dashboard/SoldProduct/SoldProduct';
import Notification from './pages/seller/Notification/Notification';
// import Card from './components/Cards/Card';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/jam-tangan" element={<ProductDetail />} />

          <Route path="/seller/Notification" element={<Notification />} />

          <Route path="/seller/home" element={<SellerHome />} />
          <Route path="/seller/add-product" element={<AddProduct />} />

          <Route path="/seller/dashboard/profile" element={<Profile />} />
          <Route path="/seller/dashboard/product-list" element={<ProductList />} />
          <Route path="/seller/dashboard/favorite" element={<Favorites />} />
          <Route path="/seller/dashboard/sold-product" element={<SoldProduct />} />
          {/* <Route path="/card" element={<Card />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
