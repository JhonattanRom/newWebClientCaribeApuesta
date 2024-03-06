"use client"
import { Children, useState } from "react";
import styles from "./styles.module.css";

export default function Collapsible({ children, title }: { children: React.ReactNode, title: string }) {
    const [isOpen, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!isOpen);
    }
    return (
        <>
            <button type="button" className={`${styles.collapsible} ${isOpen ? styles.collapsibleActive : ""}`} onClick={handleClick}>{title}</button>
            <div className={`${styles.content} ${isOpen ? styles.collapsibleOpen : ""}`}>
               {children}
            </div>
        </>
    )
}