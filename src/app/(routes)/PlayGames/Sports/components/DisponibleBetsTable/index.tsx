'use client'
import Table from "@/app/_components/Table";
import { createColumnHelper } from "@tanstack/react-table"
import { useEffect, useState } from "react";
import styles from './styles.module.css';
import Image from "next/image";
import Modal from "@/app/_components/Modal";
import Collapsible from "@/app/_components/Collapsible";

const columnHelper = createColumnHelper<any>() //Pass User type as the generic TData type

export default function DisponibleBetsTable() {

    const [data, setData] = useState([1, 2, 3, 1, 2, 3, 1, 2, 3]); //Replace for data obtained
    const [isMoreBetsMounted, setMoreBetsMountedModal] = useState(false);
    const [isMoreMarketsMounted, seMoreMarketsMountedModal] = useState(false);

    const columns = [
        columnHelper.display({
            header: () => <div>
                <Image className={styles.mediaIcon} src="/icon/ClockIcon.svg" alt="Clock icon" width={40} height={40} />
            </div>,
            id: 'timeEvent',
            cell: props => {
                {
                    return (
                        <div className={styles.timeEventContentContainer}>
                            <h3>
                                <span><Image className={styles.mediaIcon} src="/icon/CalendarIcon.svg" alt="Calendar icon" width={25} height={25} /></span>
                                03/16
                            </h3>
                            <h3>
                                <span><Image className={styles.mediaIcon} src="/icon/clockIcon.svg" alt="Clock icon" width={25} height={25} /></span>
                                13:15
                            </h3>
                            <h3>
                                <span><Image className={styles.mediaIcon} src="/icon/LiveIcon.svg" alt="Live icon" width={25} height={25} /></span>
                                LIVE
                            </h3>
                        </div>
                    )
                }
            }
        }),
        columnHelper.display({
            header: () => <div className={styles.headerTable}>
                <h3>Casa</h3>
                <h3>Visitante</h3>
            </div>,
            id: 'participants',
            cell: props => {
                {
                    return (
                        <div className={styles.participantsContentContainer}>
                            <h3>
                                Arcenal FC
                            </h3>
                            <h3>
                                Empate
                            </h3>
                            <h3>
                                Liverpool FC
                            </h3>
                        </div>
                    )
                }
            }
        }),
        columnHelper.display({
            header: () => <div className={styles.headerTable}>
                <h3>A Ganar</h3>
            </div>,
            id: 'toWin',
            cell: props => {
                {
                    return (
                        <div className={styles.toWinBetsContentContainer}>
                            <div className={styles.actionBtnContainer}>
                                <button className={styles.btn}>
                                    +276
                                </button>
                                <button className={styles.btn}>
                                    +282
                                </button>
                                <button className={styles.btn}>
                                    +112
                                </button>
                            </div>
                            <div className={styles.moreBetActionsContainer}>
                                <div className={styles.arrowsContainer} onClick={() => setMoreBetsMountedModal(true)}>
                                    <Image className={styles.mediaIcon} src="/icon/ArrowUpIcon.svg" alt="Arrow Up icon " width={7} height={15} />
                                    <Image className={styles.mediaIcon} src="/icon/ArrowDownIcon.svg" alt="Arrow Down icon " width={7} height={15} />
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        }),
        columnHelper.display({
            header: () => <div className={styles.headerTable}>
                <h3>Total</h3>
            </div>,
            id: 'total',
            cell: props => {
                {
                    return (
                        <div className={styles.totalContentContainer}>
                            <div className={styles.actionBtnContainer}>
                                <button className={styles.btn}>
                                    <span>o2.5,3</span>
                                    <span>-110</span>
                                </button>
                                <button className={styles.btn}>
                                    <span>u2.5,3</span>
                                    <span>-111</span>
                                </button>
                            </div>
                            <div className={styles.moreBetActionsContainer}>
                                <div className={styles.arrowsContainer} onClick={() => setMoreBetsMountedModal(true)}>
                                    <Image className={styles.mediaIcon} src="/icon/ArrowUpIcon.svg" alt="Arrow Up icon " width={7} height={15} />
                                    <Image className={styles.mediaIcon} src="/icon/ArrowDownIcon.svg" alt="Arrow Down icon " width={7} height={15} />
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        }),
        columnHelper.display({
            header: () => <div className={styles.headerTable}>
                <h3>Handicap</h3>
            </div>,
            id: 'handicap',
            cell: props => {
                {
                    return (
                        <div className={styles.handicapContentContainer}>
                            <div className={styles.actionBtnContainer}>
                                <button className={styles.btn}>
                                    <span>o2.5,3</span>
                                    <span>-110</span>
                                </button>
                                <button className={styles.btn}>
                                    <span>u2.5,3</span>
                                    <span>-111</span>
                                </button>
                            </div>
                            <div className={styles.moreBetActionsContainer}>
                                <div className={styles.arrowsContainer} onClick={() => setMoreBetsMountedModal(true)}>
                                    <Image className={styles.mediaIcon} src="/icon/ArrowUpIcon.svg" alt="Arrow Up icon " width={7} height={15} />
                                    <Image className={styles.mediaIcon} src="/icon/ArrowDownIcon.svg" alt="Arrow Down icon " width={7} height={15} />
                                </div>
                            </div>
                        </div>
                    )
                }
            }
        }),
        columnHelper.display({
            header: () => <div >
                <Image className={styles.mediaIcon} src="/icon/PlusIcon.svg" alt="Plus icon " width={40} height={40} />
            </div>,
            id: 'moreMarketsBets',
            cell: props => {
                {
                    return (
                        <div className={styles.moreMarketsBetsContentContainer} onClick={() => seMoreMarketsMountedModal(true)}>
                            <h3>
                                <span>64</span>
                                <span>- - - - -</span>
                            </h3>
                        </div>
                    )
                }
            }
        })
    ];

    useEffect(() => {
        if (isMoreBetsMounted || isMoreMarketsMounted) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto'; // Restaurar el valor original
        }
        return () => {
          document.body.style.overflow = 'auto'; // Asegurar que se restablezca al desmontar el componente
        };
      }, [isMoreBetsMounted, isMoreMarketsMounted]);

    return (
        <>
            <div className={styles.container}>
                <Table data={data ?? []} columns={columns} styles={styles} />
            </div >
            <Modal seMountedModal={setMoreBetsMountedModal} isMounted={isMoreBetsMounted} size="sm">
                <div className={styles.moreBetsContainer}>
                    <button className={styles.btn}>
                        <span>o2.5,3</span>
                        <span>-110</span>
                    </button>
                    <button className={styles.btn}>
                        <span>u2.5,3</span>
                        <span>-111</span>
                    </button>
                    <div className={styles.divider}></div>
                    <button className={styles.btn}>
                        <span>o2.5,3</span>
                        <span>-110</span>
                    </button>
                    <button className={styles.btn}>
                        <span>u2.5,3</span>
                        <span>-111</span>
                    </button>
                    <div className={styles.divider}></div>
                    <button className={styles.btn}>
                        <span>o2.5,3</span>
                        <span>-110</span>
                    </button>
                    <button className={styles.btn}>
                        <span>u2.5,3</span>
                        <span>-111</span>
                    </button>
                    <div className={styles.divider}></div>
                    <button className={styles.btn}>
                        <span>o2.5,3</span>
                        <span>-110</span>
                    </button>
                    <button className={styles.btn}>
                        <span>u2.5,3</span>
                        <span>-111</span>
                    </button>
                    <div className={styles.divider}></div>
                    <button className={styles.btn}>
                        <span>o2.5,3</span>
                        <span>-110</span>
                    </button>
                    <button className={styles.btn}>
                        <span>u2.5,3</span>
                        <span>-111</span>
                    </button>
                    <div className={styles.divider}></div>
                    <button className={styles.btn}>
                        <span>o2.5,3</span>
                        <span>-110</span>
                    </button>
                    <button className={styles.btn}>
                        <span>u2.5,3</span>
                        <span>-111</span>
                    </button>
                    <div className={styles.divider}></div>
                    <button className={styles.btn}>
                        <span>o2.5,3</span>
                        <span>-110</span>
                    </button>
                    <button className={styles.btn}>
                        <span>u2.5,3</span>
                        <span>-111</span>
                    </button>
                </div>
            </Modal>
            <Modal seMountedModal={seMoreMarketsMountedModal} isMounted={isMoreMarketsMounted} size="lg">
                <div className={styles.moreMarketsContainer}>
                    <nav className={styles.Navigation}>
                        <ul className={styles.links}>
                            <li><span>TODO</span></li>
                            <li><span>PARTIDO</span></li>
                            <li><span>1° PARTE</span></li>
                            <li><span>TARJETAS</span></li>
                            <li><span>TIROS DE ESQUINAS</span></li>
                            <li><span>PLAYER PROPS</span></li>
                            <li><span>TEAM PROPS </span></li>
                        </ul>
                    </nav>
                    <section className={styles.moreMarketsContent}>
                        <Collapsible title="LINEA DE DINERO - PARTIDO">
                            <div className={styles.marketContainer}>

                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>Tottenham hotspur</span>
                                        <span>2.130</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>EMPATE</span>
                                        <span>3.210</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>Everton</span>
                                        <span>4.500</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>Tottenham hotspur</span>
                                        <span>2.130</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>EMPATE</span>
                                        <span>3.210</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>Everton</span>
                                        <span>4.500</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>Tottenham hotspur</span>
                                        <span>2.130</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>EMPATE</span>
                                        <span>3.210</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>Everton</span>
                                        <span>4.500</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>Tottenham hotspur</span>
                                        <span>2.130</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>EMPATE</span>
                                        <span>3.210</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>Everton</span>
                                        <span>4.500</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>Tottenham hotspur</span>
                                        <span>2.130</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>EMPATE</span>
                                        <span>3.210</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.tripleOptionsOnMarket}`}>
                                        <span>Everton</span>
                                        <span>4.500</span>
                                    </button>
                                </div>

                            </div>

                        </Collapsible>
                        <Collapsible title="HANDICAP - PARTIDO">
                            <div className={styles.marketContainer}>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible title="TOTAL - PARTIDO">
                            <div className={styles.marketContainer}>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible title="HANDICAP - PARTIDO">
                            <div className={styles.marketContainer}>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible title="TOTAL DE EQUIPO - PARTIDO">
                            <div className={styles.marketContainer}>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible title="HANDICAP CORNERS - PARTIDO">
                            <div className={styles.marketContainer}>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible title="TOTAL CORNERS - PARTIDO">
                            <div className={styles.marketContainer}>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible title="HANDICAP TARJETAS - PARTIDO">
                            <div className={styles.marketContainer}>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible title="TOTAL TARJETAS - PARTIDO">
                            <div className={styles.marketContainer}>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                                <div className={styles.marketOptionContainer}>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>o2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                    <button className={`${styles.btn} ${styles.doubleOptionsOnMarket}`}>
                                        <span>u2.5,3</span>
                                        <span>-110</span>
                                    </button>
                                </div>
                            </div>
                        </Collapsible>
                    </section>
                </div>
            </Modal>
        </>
    )
}