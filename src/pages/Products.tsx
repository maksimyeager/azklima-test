import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../services/products";
import { fetchProducts } from "../services/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

const productsCategories = [
    {
        categoryTitle: "Boylerlər",
        categoryKey: "boylerler",
        subcategories: ["Boylerlər (İki serpantinli)", "Boylerlər"],
    },
    { categoryTitle: "Warmhaus", categoryKey: "warmhaus" },
    { categoryTitle: "Thermona", categoryKey: "thermona" },
    { categoryTitle: "Combini", categoryKey: "combini" },
    { categoryTitle: "Prestige", categoryKey: "prestige" },
    {
        categoryTitle: "New Optimal",
        categoryKey: "new-optimal",
    },
    { categoryTitle: "Comfort", categoryKey: "comfort" },
    {
        categoryTitle: "Radiatorlar",
        categoryKey: "radiatorlar",
        subcategories: [
            "Alüminium radiatorlar",
            "Panel radiatorlar",
            "Radiator aksesuarları",
        ],
    },
    { categoryTitle: "Xomutlar", categoryKey: "xomutlar" },
    {
        categoryTitle: "Dəsmal Qurudanlar",
        categoryKey: "desmal-qurudanlar",
        subcategories: [
            "DƏSMAL QURUDANLAR (XROM - BOYALI)",
            "DƏSMAL QURUDANLAR (ALÜMİNİUM)",
        ],
    },
    {
        categoryTitle: "Kanalizasiya Boruları",
        categoryKey: "kanalizasiya-borulari",
        subcategories: [
            "KANALİZASİYA BORULARI PP KANALİZASİYA BORU VƏ BİRLƏŞMƏLƏRİ (Fitinqlər)",
            "KANALİZASİYA BORU BİRLƏŞMƏLƏRİ PP (Fitinqlər)",
        ],
    },
    {
        categoryTitle: "Duş Kanalları Və Süzgəçlər",
        categoryKey: "dus-kanallari-ve-suzgecler",
    },
    {
        categoryTitle: "İvar Markalı Məhsullar",
        categoryKey: "ivar-markali-mehsullar",
        subcategories: [
            "İSİTMƏ KOLLEKTORU",
            "KOLLEKTOR TERMOSTATI",
            "TERMOMETRLİ AVTOMATİK HAVA PRUJORU",
            "QARIŞDIRICI NASOSLAR",
            "3 YOLLU KLAPAN",
            "3 YOLLU KLAPAN MOTORU",
            "KOMBİ ÜÇÜN MAQNETİK SU FİLTRİ",
            "İSTİPOL TERMO TƏNZİMLƏYİCİ DƏSTLƏR",
            "VENTİLLƏR",
        ],
    },
    {
        categoryTitle: "Çetin Strafor və Pert borular",
        categoryKey: "cetin-strafor-pert-borular",
        subcategories: [
            "YERDƏN İSİTMƏ ÜÇÜN İZOLYASİYA (STRAFOR)",
            "PE-RT BORULAR",
        ],
    },
    {
        categoryTitle: "Su – Qaz – Elektrik Tənzimləyiciləri",
        categoryKey: "su-qaz-elektrik-tenzimleyicileri",
        subcategories: [
            "SU TƏNZİMLƏYİCİLƏRİ",
            "QAZ TƏNZİMLƏYİCİLƏRİ",
            "ELEKTRİK TƏNZİMLƏYİCİLƏRİ",
        ],
    },
    {
        categoryTitle: "Unidelta (boru və fittinqlər)",
        categoryKey: "unidelta-boru-ve-fittings",
        subcategories: [
            "PEX VƏ PERT BORULAR",
            "PRES BİRLƏŞDİRİCİLƏR",
            "PRES QAYÇI",
        ],
    },
    { categoryTitle: "Nasoslar", categoryKey: "nasoslar" },
    {
        categoryTitle: "Kas Məhsulları",
        categoryKey: "kas-mehsullari",
        subcategories: [
            "PLASTİK BORULAR (PN 25*)",
            "BİRLƏŞMƏLƏR (Fitinqlər) (PN 25*)",
            "BİRLƏŞMƏLƏR (LATUN QRUPU Fitinqlər)",
            "VENTİLLƏR (LATUN)",
            "VENTİLLƏR",
            "KOLLEKTOR VƏ YERDƏN İSİTMƏ QRUPU",
            "FLEKS QRUPU (PASLANMAZ)",
            "OTAQ İSTİLİK İDARƏEDİCİSİ",
            "OTAQ İSTİLİK İDARƏEDİCİSİ (EKRANLI)",
            "Yerden Isıtma Sistemleri",
        ],
    },
    {
        categoryTitle: "Su Filtrləri və Kartriclər",
        categoryKey: "su-filtrleri-ve-kartricler",
        subcategories: ["Su Filtrləri və Kartriclər", "Kartriclər"],
    },
    { categoryTitle: "Yapışdırıcılar", categoryKey: "yapishdiricilar" },
];

const Products: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductsByCategory = async () => {
            try {
                setLoading(true);
                const allProducts = await fetchProducts();
                const filteredProducts = allProducts.filter(
                    (product) => product.category === category
                );
                setProducts(filteredProducts);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductsByCategory();
    }, [category]);

    const categoryData = productsCategories.find(
        (item) => item.categoryKey === category
    );
    const productsTitle = categoryData?.categoryTitle;
    const subcategories = categoryData?.subcategories;

    return (
        <div className="products">
            {subcategories ? "" : <h1 className="title-1">{productsTitle}</h1>}
            <div className="container">
                {/* Отображаем подкатегории */}
                {subcategories ? (
                    subcategories.map((subcategory, index) => (
                        <div key={index}>
                            <div className="products__wrapper">
                                <h2 className="title-1">{subcategory}</h2>
                                <Swiper
                                    className="products-swiper"
                                    spaceBetween={30} // Отступы между слайдами
                                    loop={true}
                                    slidesPerView={
                                        products.filter(
                                            (product) =>
                                                product.subcategory ===
                                                subcategory
                                        ).length >= 3
                                            ? 3
                                            : products.filter(
                                                  (product) =>
                                                      product.subcategory ===
                                                      subcategory
                                              ).length
                                    }
                                    style={{
                                        width: `${
                                            Math.min(
                                                products.filter(
                                                    (product) =>
                                                        product.subcategory ===
                                                        subcategory
                                                ).length,
                                                3
                                            ) *
                                                340 +
                                            (Math.min(
                                                products.filter(
                                                    (product) =>
                                                        product.subcategory ===
                                                        subcategory
                                                ).length,
                                                3
                                            ) -
                                                1) *
                                                30
                                        }px`,
                                    }} // Ширина Swiper рассчитывается динамически
                                    modules={[Navigation, Autoplay]}
                                >
                                    {products
                                        .filter(
                                            (product) =>
                                                product.subcategory ===
                                                subcategory
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
                                                                src={
                                                                    product.imageUrl
                                                                }
                                                                alt={
                                                                    product.title
                                                                }
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
                    ))
                ) : (
                    <div className="products__wrapper">
                        <Swiper
                            className="products-swiper"
                            spaceBetween={30}
                            loop={true}
                            slidesPerView={products.length}
                            modules={[Navigation, Autoplay]}
                        >
                            {products.map((product, index) => (
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
                )}
            </div>
        </div>
    );
};

export default Products;
