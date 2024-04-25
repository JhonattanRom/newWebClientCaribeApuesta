"use client";
import { useSession } from "next-auth/react";
import styles from "./styles.module.css";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { includePath } from "@/app/helpers/includePath";

const navigationTree = {
    gamesMenu: [
        { label: "SPORTS", URL: "/Sports/About", match: "/Sports" },
        { label: "TRAGAMONEDAS", URL: "/Slots/About", match: "/Slots" },
        { label: "HIPISMO", URL: "/HorseRacing/About", match: "/HorseRacing" },
        { label: "LIVEBETTING", URL: "/Live/About", match: "/Live" },
        { label: "PROPS", URL: "/Live/About", match: "/Live" },
        { label: "CASINO ONLINE", URL: "/Pragmatic/About", match: "/Pragmatic" },
    ],
    aboutUs: [
        { label: "NOSOTROS", URL: "/Information/AboutUs", match: "/Information/AboutUs" },
        { label: "CONTCTANOS", URL: "/Information/Contacts", match: "/Information/Contacts" },
        { label: "FAQ", URL: "/Information/FAQ", match: "/Information/FAQ" },
        { label: "TERMINOS Y CONDICIONES", URL: "/Information/TermsAndConditions", match: "/Information/TermsAndConditions" },
        { label: "OBLIGACIONES DEL JUGADOR", URL: "/Information/PlayerObligations", match: "/Information/PlayerObligations" },
    ],
    userInfo: [
        { label: "BANCOS DE ASOCIADOS", URL: "/Personal/PartnerBanks" , match: "/Personal/PartnerBanks"},
        { label: "RETIRAR SALDO", URL: "/Personal/WithdrawBalance", match: "/Personal/WithdrawBalance" },
        { label: "RECARGAR SALDO", URL: "/Personal/RechargeBalance" , match: "/Personal/RechargeBalance"},
        { label: "MIS CUENTAS BANCARIAS", URL: "/Personal/MyBanks" , match: "/Personal/MyBanks"},
        { label: "AGREGAR CUENTA BANCARIA", URL: "/Personal/AddBankAccount" , match: "/Personal/AddBankAccount"},
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
    const pathname = usePathname();
    return (
        <nav className={styles.Navigation}>
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => (
                    <li key={index} className={`${includePath({ pathname, path: item.match }) ? styles.active : ''}`}>
                        <Link href={item.URL} prefetch={false}>{item.label}</Link>
                    </li>
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