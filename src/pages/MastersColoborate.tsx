import React, { useState } from "react";
import FileUploader from "../components/FileUploader";
import DataInput from "../components/DataInput";
import emailjs from "@emailjs/browser";

interface FormData {
    firstName: string;
    lastName: string;
    birthDate: string;
    phoneNumber: string;
    file: File | null;
}

const MastersCollaborate: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        birthDate: "",
        phoneNumber: "",
        file: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (value: string) => {
        setFormData({ ...formData, birthDate: value });
    };

    const sendEmail = () => {
        const emailData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            birthDate: formData.birthDate,
            phoneNumber: formData.phoneNumber,
            file: formData.file ? formData.file.name : "Файл не прикреплён",
        };

        emailjs.send(
            "service_re5gkzr", // Замените на ID вашего сервиса
            "template_b26vb6f", // Замените на ID вашего шаблона
            emailData,
            "zPTmEOlGptBq0EI7i" // Замените на ваш публичный ключ
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);

        sendEmail();

        setFormData({
            firstName: "",
            lastName: "",
            birthDate: "",
            phoneNumber: "",
            file: null,
        });
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
                                    onFileChange={(file) =>
                                        setFormData({
                                            ...formData,
                                            file: file,
                                        })
                                    }
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
