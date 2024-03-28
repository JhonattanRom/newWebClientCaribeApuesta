import Image from "next/image";
import styles from "./styles.module.css";

export const StampsContainer = () => {
    return (
        <div className={styles.stamps_container}>
            <div className={styles.stamp}>
                <div className={styles.stampIcon_container}>
                    <Image
                        src={"/img/Sello_LibreDeVirus.png"}
                        alt={"Caribe Apuesta Logo"}
                        width={149}
                        height={143}
                    />
                </div>
                <h3>LIBRE DE VIRUS</h3>
            </div>
            <div className={styles.stamp}>
                <div className={styles.stampIcon_container}>
                    <Image
                        src={"/img/Sello_Calidad.png"}
                        alt={"Caribe Apuesta Logo"}
                        width={117}
                        height={143}
                    />
                </div>
                <h3>PROMESA DE CALIDAD</h3>
            </div>
            <div className={styles.stamp}>
                <div className={styles.stampIcon_container}>
                    <Image
                        src={"/img/Sello_MayorDeEdad.png"}
                        alt={"Caribe Apuesta Logo"}
                        width={131}
                        height={142}
                    />
                </div>
                <h3>SEGURIDAD PARA NIÑOS GARATIZADA</h3>
            </div>
            <div className={styles.stamp}>
                <div className={styles.stampIcon_container}>
                    <Image
                        src={"/img/Sello_Encriptado.png"}
                        alt={"Caribe Apuesta Logo"}
                        width={127}
                        height={142}
                    />
                </div>
                <h3>TRANSMISIÓN DE DATOSENCRIPTADOS</h3>
            </div>

        </div>

    )
}