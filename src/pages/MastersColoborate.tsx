import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import FileUploader from "../components/FileUploader";
import DataInput from "../components/DataInput";

const MastersCollaborate: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        birthDate: "",
        phoneNumber: "",
        file: null as File | null, // Храним файл
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (value: string) => {
        setFormData({ ...formData, birthDate: value });
    };

    const handleFileChange = (file: File | null) => {
        setFormData({ ...formData, file });
    };

    const sendEmail = () => {
        const emailData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            birthDate: formData.birthDate,
            phoneNumber: formData.phoneNumber,
            file: null,
        };

        emailjs.send(
            "service_mwzk6wc", // Замените на ID вашего сервиса
            "template_c6ite71", // Замените на ID вашего шаблона
            emailData,
            "qOh3vr15maWfko-we" // Замените на ваш публичный ключ
        );

        setFormData({
            firstName: "",
            lastName: "",
            birthDate: "",
            phoneNumber: "",
            file: null as File | null,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Отменяем стандартное поведение формы
        sendEmail(); // Отправляем email
    };

    return (
        <div className="masters ancet-form">
            <div className="ancet-form__title">
                <h1 className="title-1">Ustalar üçün əməkdaşlıq anketi</h1>
            </div>
            <div className="container">
                <div className="masters__form ancet__form">
                    <div className="form__wrapper">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form__group form__group--row">
                                <div className="form__group">
                                    <label
                                        htmlFor="firstName"
                                        className="form__label"
                                    >
                                        Ad
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
                                        Soyad
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
                                        onChange={handleDateChange}
                                    />
                                </div>
                                <div className="form__group">
                                    <label
                                        htmlFor="phoneNumber"
                                        className="form__label"
                                    >
                                        Telefon nömrəsi
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

                            <div className="form__group form__group--file">
                                <label
                                    htmlFor="file-upload"
                                    className="form__label"
                                >
                                    CV *
                                </label>
                                <FileUploader
                                    onFileChange={handleFileChange}
                                    isDisabled={false}
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

export default MastersCollaborate;
