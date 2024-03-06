"use client";
import Image from "next/image";
import styles from './styles.module.css';
import Link from 'next/link'
import { useEffect, useState } from "react";
import { Login } from "../Login";
import Modal from "@/app/_components/Modal";

export const NavigationMenu = () => {
    const [isOpen, setOpen] = useState(false);
    const [isMounted, seMountedModal] = useState(false);
    const handleOpenMenu = () => {
        setOpen(!isOpen);
    }
    useEffect(() => {
        if(isOpen) document.body.style.overflow = "hidden";
        if(!isOpen) document.body.style.overflow = "initial";
    }, [isOpen])
    return (<>
        <nav className={styles.Navigation}>
            <ul className={styles.links}>
                <li><Link href="/Sports/About">SPORTS</Link></li>
                <li><Link href="/Live/About">LIVE</Link></li>
                <li><Link href="/Casino/About">CASINO</Link></li>
                <li><Link href="/Pragmatic/About">PRAGMATIC</Link></li>
                <li><Link href="/Slots/About">SLOTS</Link></li>
                <li><Link href="/MyPoker/About">MyPOKER</Link></li>
                <li><Link href="/Information/AboutUs">INFORMACION</Link></li>
                <li><Link href="/Personal/Information">PERSONAL</Link></li>
            </ul>
        </nav>
        <div className={styles.ToggleContainer}>
            <div className={styles.Toggle_Title}>
                <Image
                    src={"/caribeApuestaLogo.svg"}
                    alt={"Caribe Apuesta Logo"}
                    width={50} height={50}
                />
                <h1>CARIBE APUESTA</h1>
            </div>
            <div className={styles.Toggle_btn} onClick={handleOpenMenu}>
                <Image src="/icon/BurguerIcon.svg" alt="Burguer icon" width={40} height={40} />
            </div>
        </div>
        <nav
            className={`${styles.mobileMenuContainer} ${isOpen ? styles.mobileMenuOpen : ""}`}>
            <ul className={styles.mobileMenu}>
                <li onClick={() => seMountedModal(true)} > <span className={styles.loginLink}>INICIAR</span></li>
                <li><Link href="/Sports/About">SPORTS</Link></li>
                <li><Link href="/Live/About">LIVE</Link></li>
                <li><Link href="/Casino/About">CASINO</Link></li>
                <li><Link href="/Pragmatic/About">PRAGMATIC</Link></li>
                <li><Link href="/Slots/About">SLOTS</Link></li>
                <li><Link href="/MyPoker/About">MyPOKER</Link></li>
                <li><Link href="/Information/AboutUs">INFORMACION</Link></li>
                <li><Link href="/Personal/Information">PERSONAL</Link></li>
            </ul>
            <Modal seMountedModal={seMountedModal} isMounted={isMounted}>
                <Login container={false} />
            </Modal>
        </nav>
    </>)
}