import React from "react";
import Partners from "../components/Partners";

const AboutUs: React.FC = () => {
    return (
        <div className="about-us">
            <div className="about-us__title">
                <h1 className="title-1">Haqqımızda</h1>
            </div>
            <div className="container">
                <p style={{ marginBottom: "40px" }}>
                    Şirkətimizin yüksək kvalifikasiyalı, təcrübəli mühəndis,
                    usta və isçi heyəti satışın ardından avadanlıqların
                    keyfiyyətli montajını, zəmanət və zəmanətdən sonrakı dövrdə
                    reqlamentə uygun texniki qulluq (servis) va lazım gələrsə
                    təmir işlərinin keyfiyyətini təmin edir. Həmçinin qeyd etmək
                    lazımdır ki, AZKLİMA şirkəti olaraq tədarükçüsü olduğumuz
                    istilik sistemlərinin keyfiyyətli servisi və təmiri üçün tam
                    spektr material-texniki bazaya malikdir və bu sahədə
                    Azərbaycanda şəksiz liderlərdəndir! 
                </p>
                <p>
                    Yarandığı andan “Azklima” şirkəti hər bir məşğuliyyət
                    sahəsində mükəmməlliyə çatmaq məqsədini güdür! Biz
                    biznesimizin miqyasını genişləndiririk və eyni zamanda köhnə
                    ticarət xəttlərimizə yenidən baxış keçirib, yeniləyirik.
                    Çünki istehlakçıların keyfiyyətli xidmət və etibarlı
                    məhsullarla təmin edilməsi hər zaman bizim əsas
                    prinsiplərimiz olub.
                </p>
            </div>
            <Partners />
        </div>
    );
};

export default AboutUs;
