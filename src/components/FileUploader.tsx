import React, { useState } from "react";
import { TbCloudUpload } from "react-icons/tb";

interface FileUploaderProps {
    onFileChange: (file: File | null) => void;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileChange }) => {
    const [fileName, setFileName] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setFileName(file.name); // Устанавливаем имя файла
            onFileChange(file); // Передаем выбранный файл в родительский компонент
        } else {
            setFileName(null); // Если файл не выбран, очищаем имя файла
            onFileChange(null);
        }
    };

    return (
        <div className="file-uploader">
            <label htmlFor="file-upload" className="file-uploader__button">
                <TbCloudUpload size={40} />
            </label>
            <input
                type="file"
                id="file-upload"
                name="file-upload"
                onChange={handleInputChange}
                style={{ display: "none" }} // Скрываем стандартный инпут
            />
            {fileName && <p className="file-uploader__file-name">{fileName}</p>}
        </div>
    );
};

export default FileUploader;
