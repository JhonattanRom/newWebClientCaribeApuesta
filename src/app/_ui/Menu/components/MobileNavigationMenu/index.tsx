"use client";
import Image from "next/image";
import styles from './styles.module.css';
import Link from 'next/link'
import { useEffect, useState } from "react";
import { Login } from "../../../Login";
import Modal from "@/app/_components/Modal";
import { SignOutBtn } from "@/app/_components/SignOutBtn";
import { useSession } from "next-auth/react";
import { LoggedUserInfo } from "@/app/_components/LoggedUserInfo";

export const MobileNavigationMenu = () => {
    const [isOpen, setOpen] = useState(false);
    const [isMounted, seMountedModal] = useState(false);
    const handleOpenMenu = () => {
        setOpen(!isOpen);
    }
    const { data: session } = useSession();

    return (<>
        <div className={styles.sticky}>
            <div className={styles.ToggleContainer}>
                <div className={styles.Toggle_Title}>
                    <Image
                        src={"/caribeApuestaLogo.svg"}
                        alt={"Caribe Apuesta Logo"}
                        width={50} height={50}
                    />
                    <Link href="/">CARIBE APUESTA</Link>
                </div>
                <div className={styles.Toggle_btn} onClick={handleOpenMenu}>
                    <Image src="/icon/BurguerIcon.svg" alt="Burguer icon" width={25} height={25} />
                </div>
            </div>
            <nav className={`${styles.navigation} ${isOpen ? styles.isOpen : ""}`}>
                <div className={styles.menuLinksContainer}>
                    {session ? <>

                        <LoggedUserInfo setOpen={setOpen} />

                    </> : <>
                        <button onClick={() => seMountedModal(true)} className={styles.menuBtnLink}>Iniciar</button>
                        <Link onClick={handleOpenMenu} className={styles.menuBtnLink} href="/RegisterUser">REGISTRATE</Link>
                    </>}
                </div>

                <div className={styles.divider}></div>
                <ul >
                    { /* SECCION DE PARLEY */}
                    <li><Link onClick={handleOpenMenu} href="/Sports/About" prefetch={false}>SPORTS</Link></li>
                    { /* SECCION DE SLOTS (PRAGMATIC) */}
                    <li><Link onClick={handleOpenMenu} href="/Slots/About" prefetch={false}>TRAGAMONEDAS</Link></li>
                    <li><Link onClick={handleOpenMenu} href="/HorseRacing/About" prefetch={false}>HIPISMO</Link></li>{/* Falta ruta para hipismo */}
                    <li><Link onClick={handleOpenMenu} href="/Live/About" prefetch={false}>LIVEBETTING</Link></li>{/* Falta ruta para livebetting */}
                    <li><Link onClick={handleOpenMenu} href="/Live/About" prefetch={false}>PROPS</Link></li>{/* Falta ruta para props */}
                    <li><Link onClick={handleOpenMenu} href="/Casino/About" prefetch={false}>CASINO ONLINE</Link></li>
                    <li><Link onClick={handleOpenMenu} href="/Pragmatic/About" prefetch={false}>JUEGOS</Link></li>{/*  */}
                    <li><Link onClick={handleOpenMenu} href="/Information/AboutUs" prefetch={false}>NOSOTROS</Link></li>
                    {session?.user && <li><Link onClick={handleOpenMenu} href="/Personal/Information" prefetch={false}>MI CUENTA</Link></li>}
                </ul>
                <div className={styles.divider}></div>
            </nav>

            <Modal seMountedModal={seMountedModal} isMounted={isMounted}>
                <Login container={false} seMountedModal={seMountedModal} />
            </Modal>
        </div>

    </>)
}

/* 

<div className={styles.ToggleContainer}>
            <div className={styles.Toggle_Title}>
                <Image
                    src={"/caribeApuestaLogo.svg"}
                    alt={"Caribe Apuesta Logo"}
                    width={50} height={50}
                />
                <Link href="/">CARIBE APUESTA</Link>
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



*/