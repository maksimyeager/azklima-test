import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Product } from "../services/products";
import { fetchProducts } from "../services/products";

const productsCategories = [
    { categoryTitle: "Boylerlər", categoryKey: "boylerler" },
    { categoryTitle: "Warmhaus", categoryKey: "warmhaus" },
    { categoryTitle: "Thermona", categoryKey: "thermona" },
    { categoryTitle: "Combini", categoryKey: "combini" },
    { categoryTitle: "Prestige", categoryKey: "prestige" },
    {
        categoryTitle: "New Optimal",
        categoryKey: "new-optimal",
    },
    { categoryTitle: "Comfort", categoryKey: "comfort" },
    { categoryTitle: "Radiatorlar", categoryKey: "radiatorlar" },
    { categoryTitle: "Xomutlar", categoryKey: "xomutlar" },
    { categoryTitle: "Dəsmal Qurudanlar", categoryKey: "desmal-qurudanlar" },
    {
        categoryTitle: "Kanalizasiya Boruları",
        categoryKey: "kanalizasiya-borulari",
    },
    {
        categoryTitle: "Duş Kanalları Və Süzgəçlər",
        categoryKey: "dus-kanallari-ve-suzgecler",
    },
    {
        categoryTitle: "İvar Markalı Məhsullar",
        categoryKey: "ivar-markali-mehsullar",
    },
    {
        categoryTitle: "Çetin Strafor və Pert borular",
        categoryKey: "cetin-strafor-pert-borular",
    },
    {
        categoryTitle: "Su – Qaz – Elektrik Tənzimləyiciləri",
        categoryKey: "su-qaz-elektrik-tenzimleyicileri",
    },
    {
        categoryTitle: "Unidelta (boru və fittinqlər)",
        categoryKey: "unidelta-boru-ve-fittings",
    },
    { categoryTitle: "Nasoslar", categoryKey: "nasoslar" },
    { categoryTitle: "Kas Məhsulları", categoryKey: "kas-mehsullari" },
    {
        categoryTitle: "Su Filtrləri və Kartriclər",
        categoryKey: "su-filtrleri-ve-kartricler",
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

    const productsTitle = productsCategories.find(
        (item) => item.categoryKey === category
    )?.categoryTitle;

    return (
        <div className="products">
            <div className="container">
                <h1 className="title-1">{productsTitle}</h1>
                <div className="products__wrapper">
                    {products.map((product) => {
                        return (
                            <Link
                                to={`/product/${product.id}`}
                                key={product.id}
                            >
                                <div key={product.id} className="product-block">
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
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Products;
