import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts, Product as ProductType } from "../services/products"; // Импортируйте вашу функцию и тип

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
                        <h1 className="product__title">{product.title}</h1>
                        <div className="product__wrapper">
                            <div className="product__info">
                                <p className="product__description">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </p>
                            </div>
                            <div className="product__image">
                                <img
                                    src={product.imageUrl}
                                    alt={product.title}
                                />
                            </div>
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
