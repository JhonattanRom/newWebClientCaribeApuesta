'use client'

import { useEffect } from "react";
import Collapsible from "@/app/_components/Collapsible";
import styles from "./styles.module.css";
import Image from "next/image";

export function LeftSideMenuContainer({ isOpen }: { isOpen: Boolean }) {
    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto'; 
        }
        return () => {
          document.body.style.overflow = 'auto';
        };
      }, [isOpen]);

    return (
        <div className={`${styles.leftSideMenuContainer} ${isOpen ? styles.isOpen : ''}`}>
            <div className={styles.filterContainer}>
                <div className={styles.btnFilterContainer}>
                    <button className={`${styles.btn} ${styles.btnLeftBorderRadius} ${styles.sidemenu_filter}`}
                    >
                        hoy
                    </button>
                    <button className={`${styles.btn} ${styles.sidemenu_filter}`}
                    >
                        mañana
                    </button>
                    <button className={`${styles.btn} ${styles.btnRightBorderRadius} ${styles.sidemenu_filter}`}
                    >
                        todos
                    </button>
                </div>
                <div className={styles.searchEventsInputCotnainer}>
                    <Image
                        src={"/icon/SearchIcon.svg"}
                        alt={"search icon"}
                        width={35} height={35}
                    />
                    <input type="text"
                        className={styles.caribeInput}
                        placeholder="Buscar . . ."
                        aria-label="Busqueda" />
                </div>
                <div className={styles.sportsMenuContainer}>
                    <Collapsible title={"AJEDREZ"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"ARTES MARCIALES"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"BASEBALL"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"BASKETBALL"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"BOXEO"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"CICLISMO"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"CRICKET"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"ARTES MARCIALES"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"BASEBALL"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"BASKETBALL"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"BOXEO"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"CICLISMO"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"CRICKET"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"ARTES MARCIALES"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"BASEBALL"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"BASKETBALL"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"BOXEO"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"CICLISMO"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"CRICKET"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"CURLING"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"DARDOS"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"ENTRETENIMIENTO"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"E-SPORTS"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"FOOTBAL"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"AJEDREZ"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"GOLF"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"MOTOR"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"POLITICA"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"RUGBY"}>
                        Menu
                    </Collapsible>
                    <Collapsible title={"TENNIS"}>
                        Menu
                    </Collapsible>
                </div>
            </div>
        </div>
    )
}