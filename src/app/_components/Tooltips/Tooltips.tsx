import styles from "./styles.module.css";

export const Tooltips = ({ children, title }: { children: any, title: string }) => {
    return (
    <div className={styles.tooltip}>
        <div className={styles.tooltip_trigger}>
            {children}
        </div>
        <span className={styles.tooltip_text}>
            {title}
        </span>
    </div>);
}