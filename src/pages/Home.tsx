import React from "react";
import boxSvg from "../assets/icons/box.svg";
import handsSvg from "../assets/icons/hands.svg";
import noteSvg from "../assets/icons/note.svg";
import Banner from "../components/Banner";
import Partners from "../components/Partners";
import { GrUserWorker } from "react-icons/gr";
import { BsCreditCardFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <>
            <Banner />
            <div className="ancets">
                <div className="container">
                    <div className="ancet">
                        <Link
                            to={"/collaboration-form-for-masters"}
                        ></Link>
                        <div className="ancet__image">
                            <GrUserWorker size={60} />
                        </div>
                        <div className="ancet__title">
                            Ustalar üçün əməkdaşlıq anketi
                        </div>
                    </div>
                    <div className="ancet">
                        <Link to={"/credit-payment-form"}></Link>
                        <div className="ancet__image">
                            <BsCreditCardFill size={60} />
                        </div>
                        <div className="ancet__title">
                            Kredit ilə ödəniş anketi
                        </div>
                    </div>
                    <div className="ancet">
                        <Link
                            to={"/corporate-cooperation-form"}
                        ></Link>
                        <div className="ancet__image">
                            <FaUsers size={60} />
                        </div>
                        <div className="ancet__title">
                            Korporativ əməkdaşlıq anketi
                        </div>
                    </div>
                </div>
            </div>
            <Partners />
            <div className="indicators">
                <h2 className="title-1">GÖSTƏRİCİLƏR</h2>
                <div className="container">
                    <div className="indicator">
                        <img src={boxSvg} alt="" />
                        <p className="indicator__title">867</p>
                        <p className="indicator__untitle">Məhsul sayı​</p>
                    </div>
                    <div className="indicator">
                        <img src={handsSvg} alt="" />
                        <p className="indicator__title">98%</p>
                        <p className="indicator__untitle">
                            Pozitif geri dönüşüm​
                        </p>
                    </div>
                    <div className="indicator">
                        <img src={noteSvg} alt="" />
                        <p className="indicator__title">99</p>
                        <p className="indicator__untitle">Servislərimiz​</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
