import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts, Product as ProductType } from "../services/products"; // Импортируйте вашу функцию и тип

const chars = [
    {
        "name": "TUTUM (lt)",
        "values": ["100 lt", "160 lt", "200 lt", "300 lt", "500 lt", "1000 lt"],
    },
];

const headers = chars.map((char) => char.name);
const rows = chars.map((char) => char.values);

const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductType>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductById = async () => {
            try {
                const products = await fetchProducts();
                const foundProduct = products.find((p) => p.id === id);
                setProduct(foundProduct);
            } catch (err) {
                console.error("Error fetching product:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProductById();
    }, [id]);

    return (
        <div className="product">
            <div className="container">
                {!loading && product ? (
                    <>
                        <div className="product__wrapper">
                            <div className="product__info">
                                <h1 className="product__title">
                                    {product.title}
                                </h1>
                            </div>
                            <div className="product__image">
                                <img
                                    src={product.imageUrl}
                                    alt={product.title}
                                />
                            </div>
                        </div>
                        <div className="product__chars">
                            <table className="product__table">
                                <thead>
                                    <tr>
                                        {headers.map((header, index) => (
                                            <th key={index}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows[0].map((_, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {chars.map((char, colIndex) => (
                                                <td key={colIndex}>
                                                    {char.values[rowIndex] ||
                                                        "-"}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                ) : (
                    <p>Загрузка...</p>
                )}
            </div>
        </div>
    );
};

export default Product;
