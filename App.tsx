
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import BookPage from './pages/BookPage';

const TopBar: React.FC = () => (
    <div className="bg-gray-800 text-white text-xs">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                    <i className="fas fa-phone"></i>
                    <span>+91 1234567890</span>
                </div>
                <span className="hidden sm:inline">|</span>
                <div className="flex items-center space-x-1">
                    <i className="fas fa-envelope"></i>
                    <span>info@electromart.com</span>
                </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
                <i className="fas fa-clock"></i>
                <span>Mon-Sat: 9:00 AM - 8:00 PM</span>
            </div>
        </div>
    </div>
);

const ScrollToTop: React.FC = () => {
    const { pathname } = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App: React.FC = () => {
    return (
        <HashRouter>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <TopBar />
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                         <Route path="/book/:productName" element={<BookPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
