'use client'

import Table from "@/app/_components/Table";
import { createColumnHelper } from "@tanstack/react-table"
import { useState } from "react";
import styles from './styles.module.css';
import Image from "next/image";

const columnHelper = createColumnHelper<any>() //Pass User type as the generic TData type

export default function DisponibleBetsTable() {

    const [data, setData] = useState([1, 2, 3,]);
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
                                <div className={styles.arrowsContainer}>
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
                                <div className={styles.arrowsContainer}>
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
                                <div className={styles.arrowsContainer}>
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
                        <div className={styles.moreMarketsBetsContentContainer}>
                            <h3>
                                <span>64</span>
                                <span>- - - - -</span>
                            </h3>
                        </div>
                    )
                }
            }
        })
    ]
    return (
        <div className={styles.container}>
            <Table data={data ?? []} columns={columns} styles={styles} />
        </div >
    )
}