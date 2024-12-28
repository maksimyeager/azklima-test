import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export interface Product {
    id: string;
    title: string;
    imageUrl: string;
}

const Product: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(
                    `https://676e8dbcdf5d7dac1ccb03cd.mockapi.io/products/${id}`
                );
                setProduct(response.data);
            } catch (err) {
                setError("Ошибка при загрузке продукта");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    return (
        <div className="product">
            <div className="container">
                <h1 className="product__title">{product.title}</h1>
                <div className="product__wrapper">
                    <div className="product__info">
                        <p className="product__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="product__image">
                        <img src={product.imageUrl} alt={product.title} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
