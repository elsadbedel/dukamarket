import Home from './components/Home/Home';
import './styles/app.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ViewProduct from './components/SingleProduct/ViewProduct';
import CartModal from './components/SingleProduct/CartModal';
import WishList from './components/SingleProduct/WishList';
import Login from './components/SingleProduct/Login';
function App() {
  return (
    <div className="App">
      <Router>
        <CartModal />
        <WishList />
        <Login />
        
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/viewproduct/:id' element={<ViewProduct />} />
          <Route path='*' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
