import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Product } from "../pages/Product";


const productsCategories = [
    { categotyTitle: "Boylerlər", categoryKey: "boylerler" },
    { categotyTitle: "Warmhaus", categoryKey: "warmhaus" },
    { categotyTitle: "Thermona", categoryKey: "thermona" },
    { categotyTitle: "Combini", categoryKey: "combini" },
    { categotyTitle: "Prestige", categoryKey: "prestige" },
    {
        categotyTitle: "New Optimal",
        categoryKey: "new-optimal",
    },
    { categotyTitle: "Comfort", categoryKey: "comfort" },
    { categotyTitle: "Radiatorlar", categoryKey: "radiatorlar" },
    { categotyTitle: "Xomutlar", categoryKey: "xomutlar" },
    { categotyTitle: "Dəsmal Qurudanlar", categoryKey: "desmal-qurudanlar" },
    {
        categotyTitle: "Kanalizasiya Boruları",
        categoryKey: "kanalizasiya-borulari",
    },
    {
        categotyTitle: "İvar Markalı Məhsullar",
        categoryKey: "ivar-markali-mehsullar",
    },
    {
        categotyTitle: "Çetin Strafor və Pert borular",
        categoryKey: "cetin-strafor-pert-borular",
    },
    {
        categotyTitle: "Su – Qaz – Elektrik Tənzimləyiciləri",
        categoryKey: "su-qaz-elektrik-tenzimleyicileri",
    },
    {
        categotyTitle: "Unidelta (boru və fittinqlər)",
        categoryKey: "unidelta-boru-ve-fittings",
    },
    { categotyTitle: "Nasoslar", categoryKey: "nasoslar" },
    { categotyTitle: "Kas Məhsulları", categoryKey: "kas-mehsullari" },
    {
        categotyTitle: "Su Filtrləri və Kartriclər",
        categoryKey: "su-filtrleri-ve-kartricler",
    },
    { categotyTitle: "Yapışdırıcılar", categoryKey: "yapishdiricilar" },
];

const Products: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setProducts([])
                const response = await axios.get(
                    `https://676e8dbcdf5d7dac1ccb03cd.mockapi.io/products?category=${category}`
                );
                setProducts(response.data);
            } catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        };

        fetchProducts();
    }, [category]);

    console.log(products);

    const productsTitle = productsCategories.find(
        (item) => item.categoryKey === category
    )?.categotyTitle;

    return (
        <div className="products">
            <div className="container">
                <h1 className="title-1">{productsTitle}</h1>
                <div className="products__wrapper">
                    {products.map((product) => {
                        return (
                            <Link to={`/product/${product.id}`} key={product.id}>
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
