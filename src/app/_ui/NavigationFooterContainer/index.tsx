"use client";
import { useSession } from "next-auth/react";
import styles from "./styles.module.css";
import Link from 'next/link'

const navigationTree = {
    gamesMenu: [
        { label: "SPORTS", URL: "/Sports/About" },
        { label: "TRAGAMONEDAS", URL: "/Slots/About" },
        { label: "HIPISMO", URL: "/HorseRacing/About" },
        { label: "LIVEBETTING", URL: "/Live/About" },
        { label: "PROPS", URL: "/Live/About" },
        { label: "CASINO ONLINE", URL: "/Pragmatic/About" },
    ],
    aboutUs: [
        { label: "NOSOTROS", URL: "/Information/AboutUs" },
        { label: "CONTCTANOS", URL: "/Information/Contacts" },
        { label: "FAQ", URL: "/Information/FAQ" },
        { label: "TERMINOS Y CONDICIONES", URL: "/Information/TermsAndConditions" },
        { label: "OBLIGACIONES DEL JUGADOR", URL: "/Information/PlayerObligations" },
    ],
    userInfo: [
        { label: "BANCOS DE ASOCIADOS", URL: "/Information/AboutUs" },
        { label: "RETIRAR SALDO", URL: "/Personal/WithdrawBalance" },
        { label: "RECARGAR SALDO", URL: "/Retirar saldo" },
        { label: "MIS CUENTAS BANCARIAS", URL: "/Personal/MyBanks" },
        { label: "AGREGAR CUENTA BANCARIA", URL: "/Personal/AddBankAccount" },
    ]
};
export const NavigationFooterContainer = () => {
    const { data: session } = useSession();

    return (
        <div className={styles.container}>
            <div className={styles.navigationContainer}>
                <Navigation items={navigationTree.aboutUs} title={'SOBRE NOSOTROS'} />
                {session?.user && <Navigation items={navigationTree.userInfo} title={'MI INFORMACION'} />}
                <Navigation items={navigationTree.gamesMenu} title={'JUEGA'} />
            </div>
            <div className={styles.subscribeContainer}>
                <SubscribeForm />
            </div>

        </div>
    )
}
const Navigation = ({ items, title }: { items: any[], title?: string }) => {
    return (
        <nav className={styles.Navigation}>
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index}><Link href={item.URL} prefetch={false}>{item.label}</Link></li>
                ))}
            </ul>
        </nav>
    )
}
const SubscribeForm = () => {
    return (
        <>
            <h3>SUSCRIBIRSE</h3>
            <form action="#" className={styles.form}>
                <div className={styles.formGroup}>
                    <input
                        className={`${styles.caribeInput}`}
                        placeholder="Ingrese su email"
                    />
                </div>
                <button className={styles.caribeBtn} type="submit">ENVIAR</button>
            </form>
        </>
    )
}