import styles from "./styles.module.css";

export function RightSideMenuContainer({ isOpen }: { isOpen: Boolean }) {
    return (
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
                    <form action="#" className="form">
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
                                    <input className={styles.totalMount} placeholder="0.00" />
                                    <div className={styles.totalMount}>100.000,00</div>
                                </div>
                            </div>
                            <div className={styles.totalItemsContainer}>
                                <div className={styles.totalItem}>
                                    <div>Probabilidades</div>
                                    <div>0</div>
                                </div>
                                <div className={styles.totalItem}>
                                    <div>Riesgo TOTAL</div>
                                    <span>
                                        <span id="riesgo_total">0</span>
                                        <span className={styles.show_currency}></span>
                                    </span>
                                </div>
                                <div className={styles.totalItem}>
                                    <div>GANANCIA</div>
                                    <div >
                                        <span>0</span>
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
                            <button className={styles.btn} data-bs-toggle="modal" data-bs-target="#reservePlayModal">Reservar jugada</button>
                            <button className={styles.btn} data-bs-toggle="modal" data-bs-target="#consultTicketModal">Consultar Ticket</button>
                            <div className={styles.searchInputCotnainer}>
                                <span className={styles.searchIcon}>
                                    lupa
                                </span>
                                <input type="text"
                                    className={styles.searchInput}
                                    placeholder="Buscar . . ."
                                    aria-label="Busqueda" />
                            </div>
                            <button className={styles.btn} data-bs-toggle="modal" data-bs-target="#myPlaysModal"> Mis Jugadas</button>
                        </div>
                        {/*<div className="totalsContainer">
                            <div className="totalsMountContainer">
                                <div className="totalActions">
                                    <button type="button" className="btn totalBtn">
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                    <button type="button" className="btn totalBtn">
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                </div>
                                <div className="totalLabel">
                                    <div className="totalMountLabel">Monto:</div>
                                    <input className="totalMount" id="amount" placeholder="0.00" />
                                    <div className="totalMount">100.000,00</div>
                                </div>
                            </div>
                            <div className="totalItemsContainer">
                                <div className={styles.totalItem}>
                                    <div>Probabilidades</div>
                                    <div id="probabilidad">0</div>
                                </div>
                                <div className={styles.totalItem}>
                                    <div>Riesgo TOTAL</div>
                                    <span className="d-flex">
                                        <span id="riesgo_total">0</span>
                                        <span className="show_currency"></span>
                                    </span>
                                </div>
                                <div className={styles.totalItem}>
                                    <div>GANANCIA</div>
                                    <div className="d-flex">
                                        <span id="ganancia_total">0</span>
                                        <span className="show_currency"></span>
                                    </div>
                                </div>
                                <div className="totalCheckGroup">
                                    <div className={styles.checkBoxContainer}>
                                        <input type="checkbox"
                                            id="auto" />
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
                                <div className="conditionsTermns">
                                    <div className={styles.checkBoxContainer}>
                                        <input type="checkbox"
                                            className="checkBox"
                                            name="ConditionandTerms" />
                                        <label title="ConditionandTerms" htmlFor="ConditionandTerms" className="conditionTermLabel">
                                            Acepto terminos y condiciones
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="FormButtonsContainer">
                            <div className="cancelContainer">
                                <button className="cancel">Cancelar</button>
                            </div>
                            <div className="submitContainer">
                                @*<input type="submit" value="ACEPTAR" className="submit" />*@
                                <input type="button" value="ACEPTAR" className="submit" id="submit_btn" />
                            </div>
                        </div>
                        <div className="bottomTicketContent">
                            <button className="btn" data-bs-toggle="modal" data-bs-target="#reservePlayModal">Reservar jugada</button>
                            <button className="btn" data-bs-toggle="modal" data-bs-target="#consultTicketModal">Consultar Ticket</button>
                            <div className="searchInputCotnainer">
                                <span className="searchIcon">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </span>
                                <input type="text"
                                    className="searchInput"
                                    placeholder="Buscar . . ."
                                    aria-label="Busqueda" />
                            </div>
                            <button className="btn" data-bs-toggle="modal" data-bs-target="#myPlaysModal"> Mis Jugadas</button>
                        </div>*/}
                    </form>
                </div>
            </div>
        </div>
    )
}