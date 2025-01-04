import React from "react";

interface DataInputProps {
    value: string;
    onChange: (value: string) => void;
}

const DataInput: React.FC<DataInputProps> = ({ value, onChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value;

        // Удаляем все символы, кроме цифр
        inputValue = inputValue.replace(/[^\d]/g, "");

        // Добавляем "/" после дня и месяца
        if (inputValue.length > 2 && inputValue.length <= 4) {
            inputValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2)}`;
        } else if (inputValue.length > 4) {
            inputValue = `${inputValue.slice(0, 2)}/${inputValue.slice(2, 4)}/${inputValue.slice(4, 8)}`;
        }

        onChange(inputValue);
    };

    return (
        <input
            type="text"
            value={value}
            onChange={handleInputChange}
            placeholder="dd/mm/yyyy"
            maxLength={10} // Максимальная длина: 10 символов
        />
    );
};

export default DataInput;
