import { Routes, Route } from "react-router-dom";
import "./scss/app.scss";
import Layout from "./layout/Layout.tsx";
import Home from "./pages/Home.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import Projects from "./pages/Projects.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import Career from "./pages/Career.tsx";
import ScrollToTop from "./utils/scrollToTop.ts";
import CollaborationForm from "./pages/Сoloborate.tsx";
import MastersCollaborate from "./pages/MastersColoborate.tsx";
import Loan from "./pages/Loan.tsx";
import Products from "./pages/Products.tsx";
import Product from "./pages/Product.tsx";
import PageTitle from "./utils/pageTitle.ts";
import { ProductProvider } from "./context/ProductContext.tsx";

const App = () => {
    return (
        <ProductProvider>
            <PageTitle />
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route
                        path="/collaboration-form-for-masters"
                        element={<MastersCollaborate />}
                    />
                    <Route path="/credit-payment-form" element={<Loan />} />
                    <Route
                        path="/corporate-cooperation-form"
                        element={<CollaborationForm />}
                    />
                    <Route path="/products/:category" element={<Products />} />
                    <Route path="/product/:id" element={<Product />} />
                </Route>
            </Routes>
        </ProductProvider>
    );
};

export default App;
