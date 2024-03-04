"use client"

import { useState } from "react";
import styles from "./styles.module.css";
import Regulations from "./Regulations";

export default function RegulationByProdcuts() {
    const [option, setOption] = useState(1);
    return (
        <section className={styles.container}>
            <article className={styles.headerRegulationContainer} lang="es">
                <h2>REGLAMENTO POR PRODUCTOS</h2>
                <p><mark>CARIBE APUESTA</mark> es el sitio número uno de apuestas en Venezuela y de los mejores Hipódromos y Apuestas Deportivas. ya sea que usted está buscando deportes competitivos, probabilidades de
                    apuestas, emocionantes juegos de <mark>Casino Online y Slots Machines</mark> o las más recientes noticias deportivas, todo en un mismo lugar.</p>
            </article>
            <div className={styles.RegulationOptions}>
                <button className={option === 1 ? styles.buttonSelected : ""}  onClick={() => setOption(1)}>Apuestas Deportivas</button>
                <button className={option === 2 ? styles.buttonSelected : ""} onClick={() => setOption(2)}>Casinos y Slots</button>
                <button className={option === 3 ? styles.buttonSelected : ""} onClick={() => setOption(3)}>Noticias</button>
                <button className={option === 4 ? styles.buttonSelected : ""} onClick={() => setOption(4)}>Soporte al Cliente</button>
            </div>
            <div className={styles.regulationsContainer}>
                <Regulations option={option}/>
            </div>
        </section>
    )
}

/*


*/