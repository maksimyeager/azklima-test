import React, { FC, useState } from "react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    coverLetter: string;
}

const Form: FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        coverLetter: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            coverLetter: "",
        });
    };

    return (
        <div className="form__wrapper">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__group form__group--row">
                    <div className="form__group form__group--name">
                        <label htmlFor="firstName" className="form__label">
                            Adınız
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
                    <div className="form__group form__group--surname">
                        <label htmlFor="lastName" className="form__label">
                            Soyadınız
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

                <div className="form__group form__group--email">
                    <label htmlFor="email" className="form__label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="form__input"
                        placeholder="example@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form__group form__group--phone">
                    <label htmlFor="phone" className="form__label">
                        Telefon nömrəniz
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form__input"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form__group form__group--cover-letter">
                    <label htmlFor="coverLetter" className="form__label">
                        Hansı mövqeyə müraciət edirsiniz?
                    </label>
                    <textarea
                        id="coverLetter"
                        name="coverLetter"
                        className="form__textarea"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="form__button">
                    Qöndər
                </button>
            </form>
        </div>
    );
};

export default Form;
