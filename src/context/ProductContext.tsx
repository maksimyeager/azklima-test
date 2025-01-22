import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchProducts, Product as ProductType } from "../services/products";

interface ProductContextType {
    products: ProductType[];
    filteredProducts: ProductType[];
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
    const location = useLocation(); // Хук для отслеживания изменений маршрута

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const products = await fetchProducts();
                setProducts(products);
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        };

        loadProducts();
    }, []);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            // Если строка поиска пустая, очищаем список фильтрованных продуктов
            setFilteredProducts([]);
        } else {
            // Иначе фильтруем продукты
            const filtered = products.filter((product) =>
                product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    }, [products, searchTerm]);

    // Очистка строки поиска при изменении маршрута
    useEffect(() => {
        setSearchTerm(""); // Сброс строки поиска
    }, [location.pathname]);

    return (
        <ProductContext.Provider
            value={{
                products,
                filteredProducts,
                searchTerm,
                setSearchTerm,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error(
            "useProductContext must be used within a ProductProvider"
        );
    }
    return context;
};
