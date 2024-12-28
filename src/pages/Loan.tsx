import React, { useState } from "react";
import FileUploader from "../components/FileUploader";

interface FormData {
    firstName: string;
    lastName: string;
    birthDate: string;
    phoneNumber: string;
    file: File | null;
    idSerialNumber: string;
    registrationAddress: string;
    residentialAddress: string;
    desiredProducts: string;
}

const Loan: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        birthDate: "",
        phoneNumber: "",
        file: null,
        idSerialNumber: "",
        registrationAddress: "",
        residentialAddress: "",
        desiredProducts: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormData({
            firstName: "",
            lastName: "",
            birthDate: "",
            phoneNumber: "",
            file: null,
            idSerialNumber: "",
            registrationAddress: "",
            residentialAddress: "",
            desiredProducts: "",
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
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
                                    <input
                                        type="date"
                                        id="birthDate"
                                        name="birthDate"
                                        className="form__input"
                                        value={formData.birthDate}
                                        onChange={handleChange}
                                        required
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

export default Loan;
