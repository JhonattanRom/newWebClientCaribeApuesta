"use client"
import { useState } from "react"
import { UserBankAccountList } from "@/app/_mockData/UserBankAccountList"
import {
    createColumnHelper,
} from '@tanstack/react-table';
import Table from "@/app/_components/Table";
import styles from "./styles.module.css";
import { UserBankAccount } from "@/app/_types/BankAccount/UserBankAccount";
import Modal from "@/app/_components/Modal";
import AddMobilePayForm from "@/app/_components/AddMobilePayForm";
import { Tooltips } from "@/app/_components/Tooltips/Tooltips";

const userBankAccountList: UserBankAccount[] = UserBankAccountList;
const columnHelper = createColumnHelper<UserBankAccount>() //Pass User type as the generic TData type


export default function UserBankTable() {
    const [isMounted, seMountedModal] = useState(false);
    const [data, setData] = useState(() => [...userBankAccountList]);
    const [accountId, setAccountId] = useState<number>(0);

    const handleModal = () => {
        seMountedModal(!isMounted)
    }

    const handleAddMobilePay = (accountId: number) => {
        setAccountId(accountId);
        handleModal();
    }
    
    const columns = [
        columnHelper.accessor('accountBankEntity', {
            header: () => 'Entidad Bancaria',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('accountBankType', {
            header: () => ' Tipo de cuenta',
            cell: info => info.renderValue(),
        }),
        columnHelper.accessor('pagoMovil', {
            header: () => 'Pago móvil',
            cell: info => info.renderValue(),
        }),
        columnHelper.accessor(row => `${row.accountBankCode}${row.accountBankNumber}`, {
            id: 'Número Cta.',
        }),
        columnHelper.display({
            id: 'actions',
            cell: props => {
                {
                    let value = props.row.original;
                    return (
                        <div className={styles.actionsContainer}>
                            {
                                value.isActive ?
                                    <Tooltips title={"Deshabilitar"}>
                                        <button className={`${styles.actionBtn}`}>
                                            X
                                        </button>
                                    </Tooltips>
                                    :
                                    <Tooltips title={"Habilitar"}>
                                        <button className={`${styles.actionBtn} ${styles.actionBtnVariant} `}>
                                            L
                                        </button>
                                    </Tooltips>
                            }
                            {!value.pagoMovil && <Tooltips title={"Agregar pago móvil"}>
                                <button onClick={() => handleAddMobilePay(value.id)} className={`${styles.actionBtn} ${styles.actionBtnVariant}`}>
                                    PM
                                </button>
                            </Tooltips>}
                        </div>
                    )
                }
            }
        }),

    ];
    return (
        <>
            <Table data={data} columns={columns} styles={styles} />
            <Modal seMountedModal={seMountedModal} isMounted={isMounted}>
                <div className={styles.modalContent}>
                    <AddMobilePayForm accountId={accountId} />
                </div>
            </Modal>
        </>
    )
}
