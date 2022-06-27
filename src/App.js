import {BrowserRouter , Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './pages/Home/Home';
import SellerHome from './pages/seller/Home/Home'
import ProductDetail from './pages/Product/Product'
// import Card from './components/Cards/Card';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/seller/home" element={<SellerHome />} />
          <Route path="/jam-tangan" element={<ProductDetail />} />
          {/* <Route path="/card" element={<Card />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
