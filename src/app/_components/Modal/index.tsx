"use client"
import React, { ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import styles from "./styles.module.css";

interface PortalProps {
    children: ReactNode,
    seMountedModal: any,
    title?: any,
    isMounted: boolean;
}

const Modal = (props: PortalProps) => {
    const handleCloseClick = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        props.seMountedModal(false);
    };
    const ref = useRef<Element | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>("#modal-root")
    }, [])

    const modalContent = (
        <div className={styles.overlay}>
            <div className={styles.modal_wrapper}>
                <div className={styles.modal} >
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