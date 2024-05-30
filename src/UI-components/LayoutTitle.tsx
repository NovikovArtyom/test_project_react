import styles from './LayoutTitle.module.css';

export function LayoutTitle({text}: { text: string }) {
    return (
        <h1 className={styles.LayoutTitle}>{text}</h1>
    );
}
