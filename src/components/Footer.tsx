import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import instagramSvg from "../assets/icons/instagram.svg";
import facebookSvg from "../assets/icons/facebook.svg";
import linkedinSvg from "../assets/icons/linkedin.svg";

const categories = [
    { name: "Boylerlər", path: "/products/boylerler" },
    { name: "Radiatorlar", path: "/products/radiatorlar" },
    { name: "Dəsmal Qurudanlar", path: "/products/desmal-qurudanlar" },
    {
        name: "İvar Markalı Məhsullar",
        path: "/products/ivar-markali-mehsullar",
    },
    {
        name: "Su – Qaz – Elektrik Tənzimləyiciləri",
        path: "/products/su-qaz-elektrik-tenzimleyicileri",
    },
    { name: "Nasoslar", path: "/products/nasoslar" },
    { name: "Kas Məhsulları", path: "/products/kas-mehsullari" },
    { name: "Yapışdırıcılar", path: "/products/yapishdiricilar" },
    { name: "Xomutlar", path: "/products/xomutlar" },
    { name: "Kanalizasiya Boruları", path: "/products/kanalizasiya-borulari" },
    {
        name: "Çetin Strafor və Pert borular",
        path: "/products/cetin-strafor-pert-borular",
    },
    {
        name: "Unidelta (boru və fittinqlər)",
        path: "/products/unidelta-boru-ve-fittings",
    },
    {
        name: "Su Filtrləri və Kartriclər",
        path: "/products/su-filtrleri-ve-kartricler",
    },
];


const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__info">
                        <Link to={"/"}>
                            <div className="footer__logo">
                                <img src={logo} alt="Azklima Logo" />
                            </div>
                        </Link>
                        <div className="footer__contacts">
                            <div className="footer__contacts-block">
                                <div>
                                    <FaMapMarkerAlt
                                        size={24}
                                        color={"#287BDD"}
                                    />
                                </div>
                                <div>
                                    <p>
                                        Əhməd Rəcəbli 224, Bakı, <br />{" "}
                                        Azərbaycan 1052
                                    </p>
                                </div>
                            </div>
                            <div className="footer__contacts-block">
                                <div>
                                    <FaPhoneAlt size={24} color={"#287BDD"} />
                                </div>
                                <div>
                                    <p>
                                        Servis Mərkəzi: +994 55 218 87 33
                                        <br />
                                        Satış Mərkəzi: +994 50 225 69 89
                                        <br />
                                        Marketinqmərkəzi: +994103045555
                                    </p>
                                </div>
                            </div>
                            <div className="footer__contacts-block">
                                <div>
                                    <FaEnvelope size={24} color={"#287BDD"} />
                                </div>
                                <div>
                                    <p>
                                        <a href="mailto:info@azklima.az">
                                            info@azklima.az
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="footer__socials">
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    className="footer__socials-block"
                                >
                                    <img src={linkedinSvg} alt="" />
                                </a>
                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    className="footer__socials-block"
                                >
                                    <img src={instagramSvg} alt="" />
                                </a>
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    className="footer__socials-block"
                                >
                                    <img src={facebookSvg} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer__pages">
                        <div className="footer__list-title">Səhifələrimiz</div>
                        <div className="footer__list">
                            <ul>
                                <li>
                                    <Link to={"/about-us"}>Haqqımızda</Link>
                                </li>
                                <li>
                                    <Link to={"/projects"}>Görülən işlər</Link>
                                </li>
                                <li>
                                    <Link to={"/career"}>Karyera</Link>
                                </li>
                                <li>
                                    <Link to={"/contact-us"}>Əlaqə</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__products">
                        <div className="footer__list-title">MəhsullarIımız</div>
                        <div className="footer__list">
                            <ul>
                                {
                                    categories.slice(0, 7).map((category) => {
                                        return <li><Link to={category.path}>{category.name}</Link></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="footer__products">
                        <div className="footer__list">
                            <ul className="untitled-list">
                            {
                                    categories.slice(7).map((category) => {
                                        return <li><Link to={category.path}>{category.name}</Link></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="footer__contacts footer__contacts--mobile">
                        <div className="footer__contacts-block">
                            <div>
                                <FaMapMarkerAlt size={24} color={"#287BDD"} />
                            </div>
                            <div>
                                <p>
                                    Əhməd Rəcəbli 224, Bakı, <br />{" "}
                                    Azərbaycan 1052
                                </p>
                            </div>
                        </div>
                        <div className="footer__contacts-block">
                            <div>
                                <FaPhoneAlt size={24} color={"#287BDD"} />
                            </div>
                            <div>
                                <p>
                                    Servis Mərkəzi: +994 55 218 87 33
                                    <br />
                                    Satış Mərkəzi: +994 50 225 69 89
                                    <br />
                                    Marketinqmərkəzi: +994103045555
                                </p>
                            </div>
                        </div>
                        <div className="footer__contacts-block">
                            <div>
                                <FaEnvelope size={24} color={"#287BDD"} />
                            </div>
                            <div>
                                <p>
                                    <a href="mailto:info@azklima.az">
                                        info@azklima.az
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="footer__socials">
                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                className="footer__socials-block"
                            >
                                <img src={linkedinSvg} alt="" />
                            </a>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="footer__socials-block"
                            >
                                <img src={instagramSvg} alt="" />
                            </a>
                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="footer__socials-block"
                            >
                                <img src={facebookSvg} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="copyright">
                        <span>
                            Copyright © 2024 Azklima by{" "}
                            <a href="https://moderndigital.az/" target="_blank">
                                Modern Digital
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
