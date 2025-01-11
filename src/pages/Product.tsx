import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    Characteristic,
    fetchProducts,
    Product as ProductType,
} from "../services/products"; // Импортируйте вашу функцию и тип

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
                console.log(foundProduct);
            } catch (err) {
                console.error("Error fetching product:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchProductById();
    }, [id]);

    const chars: Characteristic[] | undefined = product?.characteristics;

console.log(
    chars,
    chars?.map((char) => char.name)
);

const headers = chars?.map((char) => char.name);
const rows = chars?.map((char) => char.values);

return (
    <div className="product">
        <div className="container">
            {!loading && product ? (
                <>
                    <div className="product__wrapper">
                        <div className="product__info">
                            <h1 className="product__title">{product.title}</h1>
                        </div>
                        <div className="product__image">
                            <img src={product.imageUrl} alt={product.title} />
                        </div>
                    </div>
                    {/* Проверка: показываем таблицу только если chars не пустой */}
                    {chars && chars.length > 0 && (
                        <div className="product__chars">
                            <table className="product__table">
                                <thead>
                                    <tr>
                                        {headers?.map((header, index) => (
                                            <th key={index}>{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows?.[0].map((_, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {chars?.map((char, colIndex) => (
                                                <td key={colIndex}>
                                                    {char.values[rowIndex] || "-"}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            ) : (
                <></>
            )}
        </div>
    </div>
);

};

export default Product;
