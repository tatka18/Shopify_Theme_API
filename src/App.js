import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './components/Menu';
import ProductPage from './pages/ProductPage';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Footer from './components/Footer';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import SalesPage from './pages/SalesPage';
import NotFound from './pages/NotFound';
import ProductCollectionPage from './pages/ProductCollectionPage';
import { NotificationProvider } from './context/NotificationContext';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
        <NavBar />
        <Menu />
        <Cart />
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/products/:handle" element={<ProductPage />}>
          </Route>
          <Route path="/products" element={<ProductCollectionPage />}>
          </Route>
          <Route path="/about-us" element={<AboutUsPage />}>
          </Route>
          <Route path="/contact" element={<ContactPage />}>
          </Route>
          <Route path="/sales" element={<SalesPage />}>
          </Route>
          <Route path="*" element={<NotFound />}>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
