import styles from './styles/InputError.module.css';
import React from "react";

interface InputErrorProps {
    text: string;
    active: boolean;
}

export function InputError({text, active}: InputErrorProps) {
    return (
        <div
            className={`${styles.InputError} ${active ? styles.active : ''}`}>
            {text}
        </div>
    );
}
