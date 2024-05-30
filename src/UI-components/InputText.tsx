import styles from './InputText.module.css';

interface InputTextProps {
    text: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputText({ text, value, onChange }: InputTextProps) {
    return (
        <input
            className={styles.InputText}
            type="text"
            placeholder={text}
            value={value}
            onChange={onChange}
        />
    );
}
