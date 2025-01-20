import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Partners from "../components/Partners";
import { GrUserWorker } from "react-icons/gr";
import { BsCreditCardFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { fetchProducts, Product } from "../services/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                setLoading(true);
                const allProducts = await fetchProducts();
                const filteredProducts = allProducts.filter(
                    (product) =>
                        product.category === "kas-mehsullari" ||
                        product.category === "nasoslar" ||
                        product.category === "su-filtrleri-ve-kartricler"
                );
                setProducts(filteredProducts);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductsByCategory();
    }, []);
    return (
        <>
            <Banner />
            <div className="ancets">
                <div className="container">
                    <div className="ancet">
                        <Link to={"/collaboration-form-for-masters"}></Link>
                        <div className="ancet__image">
                            <GrUserWorker size={60} />
                        </div>
                        <div className="ancet__title">
                            Ustalar üçün əməkdaşlıq anketi
                        </div>
                    </div>
                    <div className="ancet">
                        <Link to={"/credit-payment-form"}></Link>
                        <div className="ancet__image">
                            <BsCreditCardFill size={60} />
                        </div>
                        <div className="ancet__title">
                            Kredit ilə ödəniş anketi
                        </div>
                    </div>
                    <div className="ancet">
                        <Link to={"/corporate-cooperation-form"}></Link>
                        <div className="ancet__image">
                            <FaUsers size={60} />
                        </div>
                        <div className="ancet__title">
                            Korporativ əməkdaşlıq anketi
                        </div>
                    </div>
                </div>
            </div>
            <Partners />
            <div className="indicators">
                <h2 className="title-1">Ən çox satılan məhsullar</h2>
                <div className="container">
                    <div className="products__wrapper">
                        {/* Навигация для слайдера */}
                        <div className="products-swiper__navigation">
                            <button className="swiper-button-prev indicators-prev"></button>
                            <button className="swiper-button-next indicators-next"></button>
                        </div>
                        <Swiper
                            className="products-swiper"
                            spaceBetween={30} // Отступы между слайдами
                            loop={true}
                            slidesPerView={1}
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                },
                            }}
                            navigation={{
                                prevEl: ".indicators-prev",
                                nextEl: ".indicators-next",
                            }}
                            style={{
                                maxWidth: `1080px`,
                            }}
                            modules={[Navigation, Autoplay]}
                        >
                            {products
                                .filter(
                                    (product) =>
                                        product.subcategory ===
                                            "KOLLEKTOR VƏ YERDƏN İSİTMƏ QRUPU" ||
                                        (product.category === "nasoslar" &&
                                            ((Number(product.id) <= 249 &&
                                                Number(product.id) >= 246) ||
                                                Number(product.id) === 212)) ||
                                        Number(product.id) === 213 ||
                                        Number(product.id) === 214 ||
                                        Number(product.id) === 217 ||
                                        product.category ===
                                            "su-filtrleri-ve-kartricler"
                                )
                                .map((product, index) => (
                                    <SwiperSlide key={index}>
                                        <Link
                                            to={`/product/${product.id}`}
                                            key={product.id}
                                        >
                                            <div className="product-block">
                                                <div className="product-block__image">
                                                    <img
                                                        src={product.imageUrl}
                                                        alt={product.title}
                                                    />
                                                </div>
                                                <h2 className="product-block__name">
                                                    {product.title}
                                                </h2>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
