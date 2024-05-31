import styles from './InputError.module.css';
import React from "react";

interface InputErrorProps {
    text: string;
    active: boolean;
    setActive: (active: boolean) => void;
}

export function InputError({text, active}: InputErrorProps) {
    return (
        <div
            className={`${styles.InputError} ${active ? styles.active : ''}`}>
            {text}
        </div>
    );
}
