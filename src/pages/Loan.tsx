import React, { useState } from "react";
import FileUploader from "../components/FileUploader";
import DataInput from "../components/DataInput";
import emailjs from "@emailjs/browser";

interface FormData {
    firstName: string;
    lastName: string;
    birthDate: string;
    phoneNumber: string;
    idSerialNumber: string;
    registrationAddress: string;
    residentialAddress: string;
    desiredProducts: string;
    file: File | null;
}

const Loan: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        birthDate: "",
        phoneNumber: "",
        idSerialNumber: "",
        registrationAddress: "",
        residentialAddress: "",
        desiredProducts: "",
        file: null,
    });
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked); // Обновляем состояние чекбокса
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = () => {
        const emailData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            birthDate: formData.birthDate,
            phoneNumber: formData.phoneNumber,
            idSerialNumber: formData.idSerialNumber,
            registrationAddress: formData.registrationAddress,
            residentialAddress: formData.residentialAddress,
            desiredProducts: formData.desiredProducts,
            file: formData.file,
        };

        emailjs.send(
            "service_mwzk6wc", // Замените на ID вашего сервиса
            "template_l47a2l9", // Замените на ID вашего шаблона
            emailData,
            "qOh3vr15maWfko-we" // Замените на ваш публичный ключ
        );

        setFormData({
            firstName: "",
            lastName: "",
            birthDate: "",
            phoneNumber: "",
            idSerialNumber: "",
            registrationAddress: "",
            residentialAddress: "",
            desiredProducts: "",
            file: null,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Отменяем стандартное поведение формы
        sendEmail(); // Отправляем email
    };

    return (
        <div className="credit ancet-form">
            <div className="ancet-form__title">
                <h1 className="title-1">Kredit ilə ödəniş anketi</h1>
            </div>
            <div className="container">
                <div className="credit__form ancet__form">
                    <div className="form__wrapper">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form__group form__group--row">
                                <div className="form__group">
                                    <label
                                        htmlFor="firstName"
                                        className="form__label"
                                    >
                                        Adınız*
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="form__input"
                                        placeholder="Jhon"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form__group">
                                    <label
                                        htmlFor="lastName"
                                        className="form__label"
                                    >
                                        Soyadınız*
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="form__input"
                                        placeholder="Doe"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form__group form__group--row">
                                <div className="form__group">
                                    <label
                                        htmlFor="birthDate"
                                        className="form__label"
                                    >
                                        Doğum tarixi
                                    </label>
                                    <DataInput
                                        value={formData.birthDate}
                                        onChange={(value) =>
                                            setFormData({
                                                ...formData,
                                                birthDate: value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="form__group">
                                    <label
                                        htmlFor="phoneNumber"
                                        className="form__label"
                                    >
                                        Əlaqə nömrəsi*
                                    </label>
                                    <input
                                        type="text"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        className="form__input"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form__group">
                                <label
                                    htmlFor="idSerialNumber"
                                    className="form__label"
                                >
                                    Şəxsiyyət vəsiqəsinin seriya nömrəsi*
                                </label>
                                <input
                                    type="text"
                                    id="idSerialNumber"
                                    name="idSerialNumber"
                                    className="form__input"
                                    value={formData.idSerialNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form__group">
                                <label
                                    htmlFor="registrationAddress"
                                    className="form__label"
                                >
                                    Qeydiyyat ünvanı*
                                </label>
                                <input
                                    type="text"
                                    id="registrationAddress"
                                    name="registrationAddress"
                                    className="form__input"
                                    value={formData.registrationAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form__group">
                                <label
                                    htmlFor="residentialAddress"
                                    className="form__label"
                                >
                                    Yaşayış ünvanı*
                                </label>
                                <input
                                    type="text"
                                    id="residentialAddress"
                                    name="residentialAddress"
                                    className="form__input"
                                    value={formData.residentialAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form__group">
                                <label
                                    htmlFor="desiredProducts"
                                    className="form__label"
                                >
                                    İstədiyiniz məhsulların adı
                                </label>
                                <textarea
                                    id="desiredProducts"
                                    name="desiredProducts"
                                    className="form__textarea"
                                    rows={3}
                                    value={formData.desiredProducts}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form__group form__group--file">
                                <label
                                    htmlFor="file-upload"
                                    className="form__label"
                                >
                                    Şəxsiyyət Vəsiqəsi*
                                </label>
                                <div className="checkbox-block">
                                    <input
                                        type="checkbox"
                                        onChange={handleCheckboxChange}
                                        checked={isChecked}
                                    />
                                    <span>
                                        Üçüncü şəxslərə şəxsi məlumatlarınızı
                                        ötürməyə razısınızmı?
                                    </span>
                                </div>
                                <FileUploader
                                    onFileChange={(file) =>
                                        setFormData({
                                            ...formData,
                                            file: file,
                                        })
                                    }
                                    isDisabled={!isChecked}
                                />
                            </div>

                            <button type="submit" className="form__button">
                                Göndər
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loan;
