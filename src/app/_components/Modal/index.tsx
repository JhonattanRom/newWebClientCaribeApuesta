"use client"
import React, { ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import styles from "./styles.module.css";

interface PortalProps {
    children: ReactNode,
    seMountedModal: any,
    title?: any,
    isMounted: boolean;
    size?: 'default' | 'sm' | 'md' | 'lg' ;
}

const Modal = (props: PortalProps) => {
    const handleCloseClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        props.seMountedModal(false);
    };
    const ref = useRef<Element | null>(null)
    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>("#modal-root")
    }, [])

    const sizeModal: 'default' | 'sm' | 'md' | 'lg' = props.size ?? 'default';
    const sizeStyles = {
        'default': `${styles.modal} ${styles.deault_size}`,
        'sm': `${styles.modal} ${styles.sm_size}`,
        'md': `${styles.modal} ${styles.md_size}`,
        'lg': `${styles.modal} ${styles.lg_size}`,
    }
    const modalContent = (
        <div className={styles.overlay}>
            <div className={styles.modal_wrapper}>
                <div className={sizeStyles[sizeModal]} >
                    <div className={styles.modal_header} >
                        <a href="#" onClick={handleCloseClick}>
                            x
                        </a>
                    </div>
                    {props.title && <h1>{props.title}</h1>}
                    <div className={styles.modal_body}>{props.children}</div>
                </div>
            </div>
        </div>
    );


    return (props.isMounted && ref.current) ? createPortal(modalContent, ref.current) : null
};

export default Modal;