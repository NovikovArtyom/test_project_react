import styles from './styles/SaveButton.module.css'
import React from "react";

interface SubmitButtonProps {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function SubmitButton({text, onClick}: SubmitButtonProps) {
    return (
        <button
            className={styles.SaveButton}
            type={'button'}
            onClick={onClick}>
            {text}
        </button>
    );
}
