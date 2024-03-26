'use client'
import { signOut } from "next-auth/react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useRouter } from 'next/navigation';


export const SignOutBtn = () => {
    const router = useRouter();

    const handleCloseSession = async () => {
        signOut({ redirect: false })
        router.push('/');
    };

    return (
        <button className={styles.btn} onClick={() => handleCloseSession()}>
            Cerrar sesión
            <Image src="/icon/OffSessionIcon.svg" alt="Ícono de cerrar sesión" width={30} height={30} />
        </button>
    )
}