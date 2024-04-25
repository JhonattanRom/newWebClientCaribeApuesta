'use client'
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Modal from "@/app/_components/Modal";

export function RightSideMenuContainer({ isOpen }: { isOpen: Boolean }) {
    const [isMyPlaysMounted, setMyPlaysMountedModal] = useState(false);
    const [isReservedPlaysMounted, setReservedPlaysMountedModal] = useState(false);

    const openMyPlayModal = (event: any) => {
        event.preventDefault();
        setMyPlaysMountedModal(true);
    }
    const openReservedPlayModal = (event: any) => {
        event.preventDefault();
        setReservedPlaysMountedModal(true);
    }
    useEffect(() => {
        if (isMyPlaysMounted || isReservedPlaysMounted) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // Restaurar el valor original
        }
        return () => {
            document.body.style.overflow = 'auto'; // Asegurar que se restablezca al desmontar el componente
        };
    }, [isMyPlaysMounted, isReservedPlaysMounted]);

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
        <>
            <div className={`${styles.rightSideMenuContainer} ${isOpen ? styles.isOpen : ''}`}>
                <div className={styles.content}>
                    <div className={styles.userFinanceContainer}>
                        <div className={styles.userFinanceActions}>
                            <button className={styles.btn} id="direct">directas</button>
                            <button className={styles.btn} id="parley">parlay</button>
                        </div>
                        <div className={styles.userFinances}>
                            <div className={styles.userFinanceLabel}>Saldo:</div>
                            <div className={styles.userFinanceMount} id="b_cash">9999.999</div>
                            <div className={styles.userFinanceLabel}>Bonos:</div>
                            <div className={styles.userFinanceMount} id="b_bonus">9999.999</div>
                        </div>
                        <form className="form">
                            <div className={styles.eventLists} >
                                <div className={styles.eventListContainer}>
                                    <div className={styles.listItem}>
                                        <div className={styles.eventItem}>
                                            <div className={styles.itemCloseContainer}>X</div>
                                            <div className={styles.eventItemInfo}>
                                                <div className={styles.eventTitle}>Norwich - Bretford</div>
                                                <div className={styles.eventInfo}>
                                                    <div className={styles.event}>Ganador - 2</div>
                                                    <div className={styles.eventMount}>+160</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.listItem}>
                                        <div className={styles.eventItem}>
                                            <div className={styles.itemCloseContainer}>X</div>
                                            <div className={styles.eventItemInfo}>
                                                <div className={styles.eventTitle}> Wolverhampton - Crystal Palace</div>
                                                <div className={styles.eventInfo}>
                                                    <div className={styles.event}>Ganador - 1</div>
                                                    <div className={styles.eventMount}>+133</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.listItem}>
                                        <div className={styles.eventItem}>
                                            <div className={styles.itemCloseContainer}>X</div>
                                            <div className={styles.eventItemInfo}>
                                                <div className={styles.eventInfo}>Man. United - Atletico Madrid</div>
                                                <div className={styles.eventInfo}>
                                                    <div className={styles.event}>Ganador - 3</div>
                                                    <div className={styles.eventMount}>+190</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles.listItem}>
                                        <div className={styles.eventItem}>
                                            <div className={styles.itemCloseContainer}>X</div>
                                            <div className={styles.eventItemInfo}>
                                                <div className={styles.eventInfo}> CD Univ. Catolica de Ecuador - The Strogest</div>
                                                <div className={styles.eventInfo}>
                                                    <div className={styles.event}>Total Goles - Más / Menos - Más de (2.5)</div>
                                                    <div className={styles.eventMount}>-104</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`${styles.listItem} ${styles.totalItemsEvent}`}>
                                    <div className={styles.eventsCount}>Eventos: 7</div>
                                    <div>LÍNEA: 1</div>
                                </div>
                            </div>
                            <div className={styles.totalsContainer}>
                                <div className={styles.totalsMountContainer}>
                                    <div className={styles.totalActions}>
                                        <button type="button" className={`${styles.btn} ${styles.totalBtn}`}>
                                            +
                                        </button>
                                        <button type="button" className={`${styles.btn} ${styles.totalBtn}`}>
                                            -
                                        </button>
                                    </div>
                                    <div className={styles.totalLabel}>
                                        <div className={styles.totalMountLabel}>Monto:</div>
                                        <div className={styles.totalMount}>100.000,00</div>
                                    </div>
                                </div>
                                <div className={styles.totalItemsContainer}>
                                    <div className={styles.totalItem}>
                                        <div>Probabilidades</div>
                                        <div> +915562</div>
                                    </div>
                                    <div className={styles.totalItem}>
                                        <div>Riesgo TOTAL</div>
                                        <span>
                                            <span id="riesgo_total">1000.00 COP</span>
                                            <span className={styles.show_currency}></span>
                                        </span>
                                    </div>
                                    <div className={styles.totalItem}>
                                        <div>GANANCIA</div>
                                        <div >
                                            <span>9.156.620,00 COP</span>
                                            <span className={styles.show_currency}></span>
                                        </div>
                                    </div>
                                    <div className={styles.totalCheckGroup}>
                                        <div className={styles.checkBoxContainer}>
                                            <input type="checkbox" />
                                            <label title="Auto" htmlFor="auto">
                                                Auto
                                            </label>
                                        </div>
                                        <div className={styles.checkBoxContainer}>
                                            <input type="radio"
                                                id="cash"
                                                name="balance"
                                                checked />
                                            <label title="Saldo" htmlFor="cash">
                                                Saldo
                                            </label>
                                        </div>
                                        <div className={styles.checkBoxContainer}>
                                            <input type="radio"
                                                id="bono"
                                                name="balance" />
                                            <label title="Bonos" htmlFor="v">
                                                Bonos
                                            </label>
                                        </div>
                                    </div>
                                    <div className={styles.conditionsTermns}>
                                        <div className={styles.checkBoxContainer}>
                                            <input type="checkbox"
                                                className={styles.checkBox}
                                                name="ConditionandTerms" />
                                            <label title="ConditionandTerms" htmlFor="ConditionandTerms" className={styles.conditionTermLabel}>
                                                Acepto terminos y condiciones
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.FormButtonsContainer}>
                                <div className={styles.cancelContainer}>
                                    <button className={styles.cancel}>Cancelar</button>
                                </div>
                                <div className={styles.submitContainer}>
                                    <input type="button" value="ACEPTAR" className={styles.submit} />
                                </div>
                            </div>
                            <div className={styles.bottomTicketContent}>
                                <button className={styles.btn} onClick={(e) => openReservedPlayModal(e)}>Reservar jugada</button>
                                <button className={styles.btn} >Consultar Ticket</button>
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
                                <button className={styles.btn} onClick={(e) => openMyPlayModal(e)}> Mis Jugadas</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Modal seMountedModal={setMyPlaysMountedModal} isMounted={isMyPlaysMounted} size="md">
                <h3>MIS JUGADAS</h3>
                <div className={styles.myPlaysContainer}>
                    <p>Ticket tomado de Internet</p>
                    <p>Usuario: ViLa23</p>
                    <p>Ticket tipo: Parlay</p>
                    <p>Ticket N°: 33654617</p>
                    <p>Pago con: Saldo</p>
                    <div className="separator">===================================</div>
                    <p>Arriesga: 1 USD</p>
                    <p>Ganar: 11,43 USD</p>
                    <p>Posible a Ganar: 12,43 USD</p>
                    <p>Valor del Ticket: 1 USD</p>
                    <div className="separator">------------------------------------------------------</div>
                    <p>1256972 1. FC Heidenheim 1846 3way sin OT: +255</p>
                    <p>18/03/2022 - 1:30 p.m.</p>
                    <p>1256986 Karlsruher SC 3way Empate: +250</p>
                    <p>18/03/2022 - 1:30 p.m.</p>
                    <div className="separator">------------------------------------------------------</div>
                    <p>17/03/2022 - 23:20 (Fecha del Servidor)</p>
                    <div className="infoAlert">
                        La empresa se reserva el derecho de eliminar cualquier apuesta
                        realizada en una o varias línea(s) con error: número de Rotación,
                        Nombres, Cuotas, Horarios, Máximo de una Apuesta, entre otros.
                        Como también eliminar apuestas realizadas despues de que el
                        juego ha comenzado.
                    </div>
                </div>
            </Modal>
            <Modal seMountedModal={setReservedPlaysMountedModal} isMounted={isReservedPlaysMounted} size="sm">
                <h3 className={styles.modalTitle}>RESERVAR TICKET DE APUESTA</h3>
                <div className={styles.reservePlaysContainer}>
                    <h5> LA SELECCIÓN SE GUARDO
                        SATISFACTORIAMENTE.
                        TÚ CÓDIGO ES:
                    </h5>
                    <h2>K1QK8</h2>
                    <div className={styles.actionsContainer}>
                        <button className={styles.btn}>Nueva Apuesta</button>
                        <button className={styles.btn}>Imprimir</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}