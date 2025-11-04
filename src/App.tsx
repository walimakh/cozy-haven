import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import DesignSystem from './pages/DesignSystem';
import DataTest from './pages/DataTest';

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/design-spec" element={<DesignSystem />} />
          <Route path="/data-test" element={<DataTest />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
