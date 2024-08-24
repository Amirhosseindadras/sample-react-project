
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Auth from './pages/Auth';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import { useSelector } from "react-redux"

function App() {
  const isDark = useSelector((state) => state.darkModeState.isDarkMode)
  return (
    <div className={`${isDark ? "bg-gray-600 " : " bg-white "}`} >
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="auth" element={<Auth />} />
          <Route path="products" element={<Products />} />
          <Route path={"products-item/:id"} element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  )
}


export default App;