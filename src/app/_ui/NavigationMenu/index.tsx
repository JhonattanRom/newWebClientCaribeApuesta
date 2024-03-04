"use client";

import Image from "next/image";
import styles from './styles.module.css';
import Link from 'next/link'
import { useState } from "react";
import { Login } from "../Login";

export const NavigationMenu = () => {

    const [isOpen, setOpen] = useState(false);

    const handleOpenMenu = () => {
        setOpen(!isOpen);
    }
    return (<>
        <nav className={styles.Navigation}>
            <ul className={styles.links}>
                <li><Link href="/SPORTS">SPORTS</Link></li>
                <li><Link href="/LIVE">LIVE</Link></li>
                <li><Link href="/CASINO">CASINO</Link></li>
                <li><Link href="/PRAGMATIC">PRAGMATIC</Link></li>
                <li><Link href="/SLOTS">SLOTS</Link></li>
                <li><Link href="/MyPOKER">MyPOKER</Link></li>
                <li><Link href="/MORE">MORE</Link></li>
                <li><Link href="/Information/AboutUs">INFORMACION</Link></li>
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
                <Image src="/iasdcon/BurguerIcon.svg" alt="Burguer icon" width={40} height={40} />
            </div>
        </div>
        <nav
            className={`${styles.mobileMenuContainer} ${isOpen ? styles.mobileMenuOpen : ""}`}>
            <ul className={styles.mobileMenu}>
                <li><Link href="/SPORTS">SPORTS</Link></li>
                <li><Link href="/LIVE">LIVE</Link></li>
                <li><Link href="/CASINO">CASINO</Link></li>
                <li><Link href="/PRAGMATIC">PRAGMATIC</Link></li>
                <li><Link href="/SLOTS">SLOTS</Link></li>
                <li><Link href="/MyPOKER">MyPOKER</Link></li>
                <li><Link href="/MORE">MORE</Link></li>
            </ul>
            <div
                className={styles.loginContainer}>
                <Login />
            </div>
        </nav>
    </>)
}