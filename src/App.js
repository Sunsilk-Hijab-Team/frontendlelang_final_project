import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './pages/Home/Home';

//seller pages
import SellerHome from './pages/seller/Home/Home'
import ProductDetail from './pages/ProductDetails/ProductDetails'
import AddProduct from './pages/seller/Add Product/AddProduct';
import ProductList from './pages/seller/Dashboard/ProductList/ProductList';
import Profile from './pages/seller/Dashboard/Profile/Profile';
import Favorites from './pages/seller/Dashboard/Favorites/Favorites';
import SoldProduct from './pages/seller/Dashboard/SoldProduct/SoldProduct';
import Notification from './pages/seller/Notification/Notification';
import NotificationTest from './pages/seller/Notification/NotificationTest';
import PreviewProduct from './pages/seller/PreviewProduct/PreviewProduct';
// import Card from './components/Cards/Card';

//buyer pages
// import BuyerHome from './pages/buyer/Home/Home';
import BuyerProduct from './pages/buyer/product/Product';
import BuyerLogin from './pages/buyer/product/BeforeLogin/Before';
import BuyerSent from './pages/buyer/product/Sent/Sent';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* BEFORE LOGIN */}
            {/* MAIN */}
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/category/:slug" element={<Home />} />
            {/* BUYER */}
              <Route path="/buyer/product" element={<BuyerLogin />} />
              <Route path="/detail/:productId" element={<ProductDetail />} />
          {/* AFTER LOGIN */}
            {/* MAIN */}
            <Route path="/logged/home" element={<SellerHome />} />
            {/* SELLER */}
            <Route path="/seller/add-product" element={<AddProduct />} />
            <Route path="/seller/dashboard/profile" element={<Profile />} />
            <Route path="/seller/dashboard/product-list" element={<ProductList />} />
            <Route path="/seller/preview-product" element={<PreviewProduct />} />
            <Route path="/seller/dashboard/favorite" element={<Favorites />} />
            <Route path="/seller/dashboard/sold-product" element={<SoldProduct />} />
            <Route path="/seller/Notification" element={<Notification />} />
            <Route path="/seller/dashboard/notification-test" element={<NotificationTest />} />
            {/* buyer */}
            <Route path="/buyer/logged/product" element={<BuyerProduct />} />
            <Route path="/buyer/logged/sent" element={<BuyerSent />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
