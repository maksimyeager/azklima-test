import React, { FC, useState } from "react";

interface FormData {
    Adınız: string;
    Soyadınız: string;
    Email: string;
    Telefon: string;
    Mövqe: string;
}

const Form: FC = () => {
    const [formData, setFormData] = useState<FormData>({
        Adınız: "",
        Soyadınız: "",
        Email: "",
        Telefon: "",
        Mövqe: "",
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
            Adınız: "",
            Soyadınız: "",
            Email: "",
            Telefon: "",
            Mövqe: "",
        });
    };

    return (
        <div className="form__wrapper">
            <form
                className="form"
                action="https://formsubmit.co/javid.mikayilov@azklima.az"
                method="POST"
            >
                <input
                    type="hidden"
                    name="_subject"
                    value="Azklima İşə Qəbul Siyasət"
                />
                <input type="hidden" name="_captcha" value="false" />

                <div className="form__group form__group--row">
                    <div className="form__group form__group--name">
                        <label htmlFor="Adınız" className="form__label">
                            Adınız
                        </label>
                        <input
                            type="text"
                            id="Adınız"
                            name="Adınız"
                            className="form__input"
                            placeholder="Jhon"
                            value={formData.Adınız}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form__group form__group--surname">
                        <label htmlFor="Soyadınız" className="form__label">
                            Soyadınız
                        </label>
                        <input
                            type="text"
                            id="Soyadınız"
                            name="Soyadınız"
                            className="form__input"
                            placeholder="Doe"
                            value={formData.Soyadınız}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form__group form__group--email">
                    <label htmlFor="Email" className="form__label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="Email"
                        name="Email"
                        className="form__input"
                        placeholder="example@gmail.com"
                        value={formData.Email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form__group form__group--phone">
                    <label htmlFor="Telefon" className="form__label">
                        Telefon nömrəniz
                    </label>
                    <input
                        type="tel"
                        id="Telefon"
                        name="Telefon"
                        className="form__input"
                        value={formData.Telefon}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form__group form__group--cover-letter">
                    <label htmlFor="Mövqe" className="form__label">
                        Hansı mövqeyə müraciət edirsiniz?
                    </label>
                    <textarea
                        id="Mövqe"
                        name="Mövqe"
                        className="form__textarea"
                        value={formData.Mövqe}
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
