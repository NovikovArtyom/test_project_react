import styles from './styles/SuccessModal.module.css';
import React from "react";

interface SuccessModalProps {
    text: string;
    active: boolean;
}

export function SuccessModal({text, active}: SuccessModalProps) {
    return (
        <div
            className={`${styles.SuccessModal} ${active ? styles.active : ''}`}>
            {text}
        </div>
    );
}
