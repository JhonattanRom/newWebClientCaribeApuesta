import styles from "./styles.module.css";

export const FooterDetails = () => {
    return (
        <section className={styles.footer_details}>
            <div className={styles.footer_principalDetail}>
                <p>
                    Inversiones CaribeApuesta, C.A. Rif: J-409540634.
                </p>
                <p>
                    Dirección: Porlamar, Estado NE, República Bolivariana de Venezuela.
                </p>
            </div>
            <p>
                © 2022 CARIBEAPUESTA. Todos los Derechos Reservados
            </p>
        </section>
    )
}