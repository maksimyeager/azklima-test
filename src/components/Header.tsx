import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import MobileNavbar from "./MobileNavbar";
import Categories from "./Categories";
import ProductSearch from "./ProductsSearch";
import ProductList from "./ProductsList";

const headerLinks = [
    { name: "HAQQIMIZDA", path: "/about-us" },
    { name: "MƏHSULLARIMIZ", path: "/products" },
    { name: "GÖRÜLƏN İŞLƏR", path: "/projects" },
    { name: "KARYERA", path: "/career" },
    { name: "ƏLAQƏ", path: "/contact-us" },
];

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    const handleCloseNavbar = () => {
        setOpen(false);
    };

    return (
        <>
            <header className="header">
                <div className="container">
                    <Link to="/" onClick={handleCloseNavbar}>
                        <div className="header__logo">
                            <img src={logo} alt="Azklima Logo" />
                        </div>
                    </Link>
                    <div className="header__menu">
                        <ul className="header__list">
                            {headerLinks.map((link, id) => {
                                const isActive = location.pathname.startsWith(
                                    link.path
                                );
                                if (id === 1) {
                                    return (
                                        <li
                                            key={id}
                                            className={`header__list-item ${
                                                isActive ? "active" : ""
                                            }`}
                                            onMouseEnter={handleMouseEnter}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <a
                                                href="#"
                                                className="categories__link"
                                            >
                                                {link.name}
                                                <FaChevronDown
                                                    className={`icon-1 ${
                                                        dropdownOpen
                                                            ? "icon-1--open"
                                                            : ""
                                                    }`}
                                                />
                                            </a>
                                            {dropdownOpen && (
                                                <Categories
                                                    closeDropdown={
                                                        handleMouseLeave
                                                    }
                                                />
                                            )}
                                        </li>
                                    );
                                }

                                return (
                                    <li
                                        key={id}
                                        className={`header__list-item ${
                                            isActive ? "active" : ""
                                        }`}
                                    >
                                        <Link to={link.path}>{link.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <button
                        className="header__btn"
                        onClick={() => setOpen(!open)}
                    >
                        {!open && (
                            <RxHamburgerMenu size={40} color={"#287BDD"} />
                        )}
                    </button>
                </div>
                <div className="container">
                    <div className="header__search">
                        <ProductSearch />
                    </div>
                </div>
                <ProductList />
            </header>

            <MobileNavbar open={open} onClose={handleCloseNavbar} />
        </>
    );
};

export default Header;
