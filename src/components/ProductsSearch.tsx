import React from "react";
import { useProductContext } from "../context/ProductContext";

const ProductSearch: React.FC = () => {
    const { searchTerm, setSearchTerm } = useProductContext();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Məhsulları axtarın..."
                value={searchTerm}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default ProductSearch;
