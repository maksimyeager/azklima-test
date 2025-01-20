import React, { useState } from "react";

interface FormData {
    şirkətAdı: string;
    fəaliyyətSahəsi: string;
    qeydiyyatNömrəsi: string;
    əlaqəNömrəsi: string;
    email: string;
    ünvan: string;
    fəaliyyətMüddəti: string;
    əməkdaşlıqXidmətləri: string;
    əvvəlkiƏməkdaşlıqlar: string;
    əməkdaşlıqTəklifi: string;
}

const CollaborationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        şirkətAdı: "",
        fəaliyyətSahəsi: "",
        qeydiyyatNömrəsi: "",
        əlaqəNömrəsi: "",
        email: "",
        ünvan: "",
        fəaliyyətMüddəti: "",
        əməkdaşlıqXidmətləri: "",
        əvvəlkiƏməkdaşlıqlar: "",
        əməkdaşlıqTəklifi: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setFormData({
            şirkətAdı: "",
            fəaliyyətSahəsi: "",
            qeydiyyatNömrəsi: "",
            əlaqəNömrəsi: "",
            email: "",
            ünvan: "",
            fəaliyyətMüddəti: "",
            əməkdaşlıqXidmətləri: "",
            əvvəlkiƏməkdaşlıqlar: "",
            əməkdaşlıqTəklifi: "",
        });
    };

    return (
        <div className="coloborate ancet-form">
            <div className="ancet-form__title">
                <h1 className="title-1">Korporativ əməkdaşlıq anketi</h1>
            </div>
            <div className="container">
                <div className="coloborate__form ancet__form">
                    <div className="form__wrapper">
                        <form
                            className="form"
                            action="https://formsubmit.co/javid.mikayilov@azklima.az"
                            method="POST"
                        >
                            <input
                                type="hidden"
                                name="_subject"
                                value="Azklima Korporativ əməkdaşlıq anketi"
                            />
                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            />
                            <div className="form__group">
                                <label
                                    htmlFor="şirkətAdı"
                                    className="form__label"
                                >
                                    Şirkətin tam adı
                                </label>
                                <input
                                    type="text"
                                    id="şirkətAdı"
                                    name="şirkətAdı"
                                    className="form__input"
                                    value={formData.şirkətAdı}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="fəaliyyətSahəsi"
                                    className="form__label"
                                >
                                    Fəaliyyət sahəsi
                                </label>
                                <input
                                    type="text"
                                    id="fəaliyyətSahəsi"
                                    name="fəaliyyətSahəsi"
                                    className="form__input"
                                    value={formData.fəaliyyətSahəsi}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="qeydiyyatNömrəsi"
                                    className="form__label"
                                >
                                    Qeydiyyat nömrəsi
                                </label>
                                <input
                                    type="text"
                                    id="qeydiyyatNömrəsi"
                                    name="qeydiyyatNömrəsi"
                                    className="form__input"
                                    value={formData.qeydiyyatNömrəsi}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="əlaqəNömrəsi"
                                    className="form__label"
                                >
                                    Əlaqə nömrəsi
                                </label>
                                <input
                                    type="text"
                                    id="əlaqəNömrəsi"
                                    name="əlaqəNömrəsi"
                                    className="form__input"
                                    value={formData.əlaqəNömrəsi}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label htmlFor="email" className="form__label">
                                    Email ünvanı
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form__input"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label htmlFor="ünvan" className="form__label">
                                    Şirkət ünvanı
                                </label>
                                <input
                                    type="text"
                                    id="ünvan"
                                    name="ünvan"
                                    className="form__input"
                                    value={formData.ünvan}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="fəaliyyətMüddəti"
                                    className="form__label"
                                >
                                    Fəaliyyət müddəti (illərlə)
                                </label>
                                <input
                                    type="text"
                                    id="fəaliyyətMüddəti"
                                    name="fəaliyyətMüddəti"
                                    className="form__input"
                                    value={formData.fəaliyyətMüddəti}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="əməkdaşlıqXidmətləri"
                                    className="form__label"
                                >
                                    Əməkdaşlıq marağı olan xidmətlər və ya
                                    məhsullar
                                </label>
                                <textarea
                                    id="əməkdaşlıqXidmətləri"
                                    name="əməkdaşlıqXidmətləri"
                                    className="form__textarea"
                                    value={formData.əməkdaşlıqXidmətləri}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="əvvəlkiƏməkdaşlıqlar"
                                    className="form__label"
                                >
                                    Əvvəlki əməkdaşlıqlar və ya layihələr
                                    haqqında qısa məlumat (əgər varsa)
                                </label>
                                <textarea
                                    id="əvvəlkiƏməkdaşlıqlar"
                                    name="əvvəlkiƏməkdaşlıqlar"
                                    className="form__textarea"
                                    value={formData.əvvəlkiƏməkdaşlıqlar}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="əməkdaşlıqTəklifi"
                                    className="form__label"
                                >
                                    Əməkdaşlıq təklifi və gözləntilər
                                </label>
                                <textarea
                                    id="əməkdaşlıqTəklifi"
                                    name="əməkdaşlıqTəklifi"
                                    className="form__textarea"
                                    value={formData.əməkdaşlıqTəklifi}
                                    onChange={handleChange}
                                    required
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

export default CollaborationForm;
