import React from "react";
import Form from "../components/Form";

const Career: React.FC = () => {
    return (
        <div className="career ancet-form">
            <div className="ancet-form__title career__title">
                <h1 className="title-1">İşə Qəbul Siyasətimiz</h1>
            </div>
            <h1 className="title-1"></h1>
            <div className="container">
                <p className="carrer__description">
                    Sahib olduğumuz resurslardan ən qiymətli olanı peşəkar və
                    işinə bağlı insan resurslarımızdır. Biz rəqabət
                    üstünlüyümüzü əməkdaşlarımızın peşəkarlığında, inkişafa və
                    innovasiyalara açıq şirkət mədəniyyətimizdə görürük. Bu
                    baxımdan hər bir vəzifəyə kadr seçimi, vəzifədə yüksəliş,
                    Qrup şirkətləri arası transferlər ciddi prosedurlarla
                    tənzimlənir. Fərdi və işgüzar keyfiyyətlərinə güvənən, bilik
                    və təcrübəsini real biznes mühitində və rəqabət atmosferində
                    artırmaq istəyən, dəyər yaratmağı özünə hədəf qoyan hər
                    kəs Azklima-da karyera qura bilər.
                </p>
                <div className="career__form ancet__form">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Career;
