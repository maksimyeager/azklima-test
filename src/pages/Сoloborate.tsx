import React, { useState } from "react";

interface FormData {
    companyName: string;
    activityField: string;
    registrationNumber: string;
    contactNumber: string;
    email: string;
    companyAddress: string;
    operationDuration: string;
    interestedServices: string;
    previousCollaborations: string;
    collaborationProposal: string;
}

const CollaborationForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        companyName: "",
        activityField: "",
        registrationNumber: "",
        contactNumber: "",
        email: "",
        companyAddress: "",
        operationDuration: "",
        interestedServices: "",
        previousCollaborations: "",
        collaborationProposal: "",
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
            companyName: "",
            activityField: "",
            registrationNumber: "",
            contactNumber: "",
            email: "",
            companyAddress: "",
            operationDuration: "",
            interestedServices: "",
            previousCollaborations: "",
            collaborationProposal: "",
        });
    };

    return (
        <div className="coloborate ancet-form">
            <div className="ancet-form__title">
                <h1 className="title-1 ">Korporativ əməkdaşlıq anketi</h1>
            </div>
            <div className="container">
                <div className="coloborate__form ancet__form">
                    <div className="form__wrapper">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form__group">
                                <label
                                    htmlFor="companyName"
                                    className="form__label"
                                >
                                    Şirkətin tam adı
                                </label>
                                <input
                                    type="text"
                                    id="companyName"
                                    name="companyName"
                                    className="form__input"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="activityField"
                                    className="form__label"
                                >
                                    Fəaliyyət sahəsi
                                </label>
                                <input
                                    type="text"
                                    id="activityField"
                                    name="activityField"
                                    className="form__input"
                                    value={formData.activityField}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="registrationNumber"
                                    className="form__label"
                                >
                                    Qeydiyyat nömrəsi
                                </label>
                                <input
                                    type="text"
                                    id="registrationNumber"
                                    name="registrationNumber"
                                    className="form__input"
                                    value={formData.registrationNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="contactNumber"
                                    className="form__label"
                                >
                                    Əlaqə nömrəsi
                                </label>
                                <input
                                    type="text"
                                    id="contactNumber"
                                    name="contactNumber"
                                    className="form__input"
                                    value={formData.contactNumber}
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
                                <label
                                    htmlFor="companyAddress"
                                    className="form__label"
                                >
                                    Şirkət ünvanı
                                </label>
                                <input
                                    type="text"
                                    id="companyAddress"
                                    name="companyAddress"
                                    className="form__input"
                                    value={formData.companyAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="operationDuration"
                                    className="form__label"
                                >
                                    Fəaliyyət müddəti (illərlə)
                                </label>
                                <input
                                    type="text"
                                    id="operationDuration"
                                    name="operationDuration"
                                    className="form__input"
                                    value={formData.operationDuration}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="interestedServices"
                                    className="form__label"
                                >
                                    Əməkdaşlıq marağı olan xidmətlər və ya
                                    məhsullar
                                </label>
                                <textarea
                                    id="interestedServices"
                                    name="interestedServices"
                                    className="form__textarea"
                                    value={formData.interestedServices}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="previousCollaborations"
                                    className="form__label"
                                >
                                    Əvvəlki əməkdaşlıqlar və ya layihələr
                                    haqqında qısa məlumat (əgər varsa)
                                </label>
                                <textarea
                                    id="previousCollaborations"
                                    name="previousCollaborations"
                                    className="form__textarea"
                                    value={formData.previousCollaborations}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form__group">
                                <label
                                    htmlFor="collaborationProposal"
                                    className="form__label"
                                >
                                    Əməkdaşlıq təklifi və gözləntilər
                                </label>
                                <textarea
                                    id="collaborationProposal"
                                    name="collaborationProposal"
                                    className="form__textarea"
                                    value={formData.collaborationProposal}
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
