import React from "react";
import { useProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const ProductList: React.FC = () => {
    const { filteredProducts } = useProductContext();

    return (
        <div className="product-list__wrapper">
            <div className="container">
                <div className="product-list">
                    {filteredProducts.length > 0 &&
                        filteredProducts
                            .map((product) => (
                                <Link
                                    to={`/product/${product.id}`}
                                    key={product.id}
                                >
                                    <div
                                        key={product.id}
                                        className="product-item"
                                    >
                                        <div className="product-item__img">
                                            <img
                                                src={product.imageUrl}
                                                alt=""
                                            />
                                        </div>
                                        <div className="product-item__info">
                                            <h2>{product.title}</h2>
                                        </div>
                                    </div>
                                </Link>
                            ))
                            .slice(0, 5)}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
