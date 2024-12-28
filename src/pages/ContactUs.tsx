import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const ContactUs: React.FC = () => {
    return (
        <div className="contact-us">
            <div className="container">
                <h1 className="title-1">Əlaqə</h1>
                <div className="contact-us__wrapper">
                    <div className="contact-us__block">
                        <div className="contact-us__block-image">
                            <FaMapMarkerAlt size={40} color={"#287BDD"} />
                        </div>
                        <div className="contact-us__block-info">
                            <div className="contact-us__block-title">
                                Adres:
                            </div>
                            <div>
                                Əhməd Rəcəbli 224, Bakı, <br /> Azərbaycan 1052
                            </div>
                        </div>
                    </div>
                    <div className="contact-us__block">
                        <div className="contact-us__block-image">
                            <FaPhoneAlt size={40} color={"#287BDD"} />
                        </div>
                        <div className="contact-us__block-info">
                            <div className="contact-us__block-title">
                                Əlaqə nömrələri:
                            </div>
                            <div>
                                Servis Mərkəzi: <br /> +994 55 218 87 33
                            </div>
                            <div>
                                Satış Mərkəzi: <br /> +994 50 225 69 89
                            </div>
                        </div>
                    </div>
                    <div className="contact-us__block">
                        <div className="contact-us__block-image">
                            <FaEnvelope size={40} color={"#287BDD"} />
                        </div>
                        <div className="contact-us__block-info">
                            <div className="contact-us__block-title">
                                E-mail:
                            </div>
                            <a href="mailto:info@azklima.az">info@azklima.az</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
