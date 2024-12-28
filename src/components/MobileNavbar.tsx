import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import MobileCategories from "./MobileCategories";
import { FaChevronDown } from "react-icons/fa";

const mobileNavbarLinks = [
    { name: "HAQQIMIZDA", path: "/about-us" },
    { name: "MƏHSULLARIMIZ", path: "" },
    { name: "GÖRÜLƏN İŞLƏR", path: "/projects" },
    { name: "KARYERA", path: "/career" },
    { name: "ƏLAQƏ", path: "/contact-us" },
];

type MobileNavbarProps = {
    open: boolean;
    onClose: () => void;
};

const MobileNavbar: React.FC<MobileNavbarProps> = ({ open, onClose }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [open]);

    const handleDropdownClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div
                className={`mobile-navbar--overlay ${
                    open ? "mobile-navbar--overlay--open" : ""
                }`}
            ></div>
            <div
                className={`mobile-navbar ${open ? "mobile-navbar--open" : ""}`}
            >
                <div className="mobile-navbar__close" onClick={onClose}>
                    <IoMdClose size={40} color={"#287BDD"} />
                </div>

                <ul className="mobile-navbar__list">
                    {mobileNavbarLinks.map((link, id) => {
                        if (id === 1) {
                            return (
                                <li key={id} className="mobile-navbar__item">
                                    <a
                                        href="#"
                                        onClick={handleDropdownClick}
                                        className="mobile-categories__link"
                                    >
                                        {link.name}
                                        <FaChevronDown
                                            className={`mobile-icon-1 ${
                                                dropdownOpen
                                                    ? "mobile-icon-1--open"
                                                    : ""
                                            }`}
                                        />
                                    </a>
                                    {dropdownOpen && (
                                        <MobileCategories
                                            closeDropdown={() => {
                                                setDropdownOpen(false);
                                                onClose();
                                            }}
                                        />
                                    )}
                                </li>
                            );
                        }

                        return (
                            <li key={id} className="mobile-navbar__item">
                                <Link
                                    to={link.path}
                                    className="mobile-navbar__link"
                                    onClick={onClose}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

export default MobileNavbar;
