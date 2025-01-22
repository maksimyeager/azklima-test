import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const categories = [
    {
        name: "Kombilər – Qazanlar",
        path: "",
        subcategories: [
            { name: "Warmhaus 🇹🇷", path: "/products/warmhaus" },
            { name: "Thermona 🇨🇿🇿", path: "/products/thermona" },
            { name: "Combini 🇨🇳", path: "/products/combini" },
            { name: "Prestige 🇨🇳", path: "/products/prestige" },
            {
                name: "New Optimal 🇨🇳",
                path: "/products/new-optimal",
            },
            { name: "Comfort 🇨🇳", path: "/products/comfort" },
        ],
    },
    { name: "Boylerlər", path: "/products/boylerler" },
    { name: "Radiatorlar", path: "/products/radiatorlar" },
    { name: "Kas Məhsulları", path: "/products/kas-mehsullari" },
    { name: "Xomutlar", path: "/products/xomutlar" },
    { name: "Dəsmal Qurudanlar", path: "/products/desmal-qurudanlar" },
    { name: "Kanalizasiya Boruları", path: "/products/kanalizasiya-borulari" },
    { name: "Alcaplast Məhsulları", path: "/products/alcaplast-mehsullari" },
    {
        name: "Duş Kanalları Və Süzgəçlər",
        path: "/products/dus-kanallari-ve-suzgecler",
    },
    {
        name: "İvar Markalı Məhsullar",
        path: "/products/ivar-markali-mehsullar",
    },
    {
        name: "Çetin Strafor və Pert borular",
        path: "/products/cetin-strafor-pert-borular",
    },
    {
        name: "Su – Qaz – Elektrik Tənzimləyiciləri",
        path: "/products/su-qaz-elektrik-tenzimleyicileri",
    },
    {
        name: "Unidelta (boru və fittinqlər)",
        path: "/products/unidelta-boru-ve-fittings",
    },
    { name: "Nasoslar", path: "/products/nasoslar" },
    {
        name: "Su Filtrləri və Kartriclər",
        path: "/products/su-filtrleri-ve-kartricler",
    },
    { name: "Yapışdırıcılar", path: "/products/yapishdiricilar" },
    
];

type CategoriesProps = {
    closeDropdown: () => void;
};

const MobileCategories: React.FC<CategoriesProps> = ({ closeDropdown }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleCategoryClick = (e: React.MouseEvent, index: number) => {
        e.preventDefault();
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleLinkClick = () => {
        closeDropdown();
    };

    return (
        <div className="mobile-categories">
            <ul className="mobile-categories__menu">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className={`mobile-categories__item ${
                            category.subcategories ? "has-subcategories" : ""
                        }`}
                    >
                        {category.subcategories ? (
                            <>
                                <a
                                    href="#"
                                    className="mobile-categories__link"
                                    onClick={(e) =>
                                        handleCategoryClick(e, index)
                                    }
                                >
                                    {category.name}
                                    <FaChevronDown
                                        className={`mobile-icon-2 ${
                                            activeIndex === index
                                                ? "mobile-icon-2--open"
                                                : ""
                                        }`}
                                    />
                                </a>
                                {activeIndex === index && (
                                    <ul className="mobile-dropdown">
                                        {category.subcategories.map(
                                            (subcategory, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        to={subcategory.path}
                                                        onClick={
                                                            handleLinkClick
                                                        }
                                                    >
                                                        {subcategory.name}
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </>
                        ) : (
                            <Link
                                to={category.path}
                                className="mobile-categories__link"
                                onClick={handleLinkClick}
                            >
                                {category.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MobileCategories;
