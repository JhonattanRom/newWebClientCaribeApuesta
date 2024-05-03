"use client";
import Image from "next/image";
import styles from './styles.module.css';
import Link from 'next/link'
import { useState } from "react";
import { Login, PrevLogin } from "../../../Login";
import Modal from "@/app/_components/Modal";
import { useSession } from "next-auth/react";
import { LoggedUserInfo } from "@/app/_components/LoggedUserInfo";
import { includePath } from "@/app/helpers/includePath";
import { usePathname } from "next/navigation";

export const MobileNavigationMenu = () => {
    const pathname = usePathname();
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
                        {
                            /* 
                            <button onClick={() => seMountedModal(true)} className={styles.menuBtnLink}>Iniciar</button>
                            <Link onClick={handleOpenMenu} className={styles.menuBtnLink} href="/RegisterUser">REGISTRATE</Link>
                            */
                        }
                        <PrevLogin />
                    </>}
                </div>
                <div className={styles.divider}></div>
                <ul >
                    { /* SECCION DE PARLEY */}
                    <li className={`${includePath({ pathname, path: '/Sports' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Sports/About" prefetch={false}>SPORTS</Link>
                    </li>
                    { /* SECCION DE SLOTS (PRAGMATIC) */}
                    <li className={`${includePath({ pathname, path: '/Slots' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Slots/About" prefetch={false}>TRAGAMONEDAS</Link>
                    </li>
                    <li className={`${includePath({ pathname, path: '/HorseRacing' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/HorseRacing/About" prefetch={false}>HIPISMO</Link>
                    </li>{/* Falta ruta para hipismo 
                    <li className={`${includePath({ pathname, path: '/Live' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Live/About" prefetch={false}>LIVEBETTING</Link>
                    </li> Falta ruta para livebetting */}
                    <li className={`${includePath({ pathname, path: '/Casino' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Casino/About" prefetch={false}>CASINO ONLINE</Link>
                    </li>{/*
                    <li className={`${includePath({ pathname, path: '/Pragmatic' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Pragmatic/About" prefetch={false}>JUEGOS</Link>
                    </li>  */}
                    <li className={`${includePath({ pathname, path: '/Information' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Information/AboutUs" prefetch={false}>NOSOTROS</Link>
                    </li>{/*
                    session?.user && <li className={`${includePath({ pathname, path: '/Personal' }) ? styles.active : ''}`}>
                        <Link onClick={handleOpenMenu} href="/Personal/Information" prefetch={false}>MI CUENTA</Link>
                    </li>*/}
                </ul>
                <div className={styles.divider}></div>
            </nav>
            <Modal seMountedModal={seMountedModal} isMounted={isMounted}>
                <Login container={false} seMountedModal={seMountedModal} />
            </Modal>
        </div>

    </>)
}