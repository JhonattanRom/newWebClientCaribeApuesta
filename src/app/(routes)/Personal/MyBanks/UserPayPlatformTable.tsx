"use client"
import {
    createColumnHelper,
} from '@tanstack/react-table';
import { UserPlaftormAccount } from '@/app/_types/BankAccount/UserPlaftormAccount';
import styles from "./styles.module.css";
import { useState } from 'react';
import { UserPayPlatformList } from '@/app/_mockData/UserPlatformAccountList';
import Table from '@/app/_components/Table';
import { Tooltips } from '@/app/_components/Tooltips/Tooltips';

const userPlaftormAccountList: UserPlaftormAccount[] = UserPayPlatformList;
const columnHelper = createColumnHelper<UserPlaftormAccount>() //Pass User type as the generic TData type

export default function UserPayPlatformTable() {
    const [data, setData] = useState(() => [...userPlaftormAccountList]);
    const columns = [
        columnHelper.accessor('email', {
            header: () => 'Email',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('platform', {
            header: () => 'Plataforma',
            cell: info => info.renderValue(),
        }),
        columnHelper.accessor('onwerNameAccount', {
            header: () => 'Nombre completo',
            cell: info => info.renderValue(),
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
                        </div>
                    )
                }
            }
        }),

    ];
    return (<Table data={data} columns={columns} styles={styles} />)
}