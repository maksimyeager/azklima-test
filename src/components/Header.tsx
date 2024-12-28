import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaChevronDown} from "react-icons/fa";
import logo from "../assets/logo.png";
import MobileNavbar from "./MobileNavbar";
import Categories from "./Categories";

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

    const handleDropdownClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    const handleCloseNavbar = () => {
        setOpen(false);
    };

    const handleCloseDropdown = () => {
        setDropdownOpen(false);
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
                                        >
                                            <a
                                                href="#"
                                                onClick={handleDropdownClick}
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
                                                        handleCloseDropdown
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
                                        <Link
                                            to={link.path}
                                            onClick={handleCloseDropdown}
                                        >
                                            {link.name}
                                        </Link>
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
            </header>
            <MobileNavbar open={open} onClose={handleCloseNavbar} />
        </>
    );
};

export default Header;
