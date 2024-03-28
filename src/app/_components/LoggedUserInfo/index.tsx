"use client";
import styles from './styles.module.css';
import { useSession } from "next-auth/react";
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import useAxiosAuth from '@/app/hooks/axios/useAxiosAuth';
import Image from "next/image";
import { SignOutBtn } from '../SignOutBtn';

export const LoggedUserInfo = ({ setOpen }: { setOpen?: any }) => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const handleRedirect = async () => {
        if(setOpen) {setOpen();}
        router.push('/Personal/Information');
    };

    let bonoTotalVar = 0;
    const axiosAuth = useAxiosAuth();
    const { isLoading, data, error } = useQuery(
        {
            queryKey: ['userBalance'],
            queryFn: () => {
                return axiosAuth.get(process.env.NEXT_PUBLIC_BACKEND_URL + '/user/mybalance')
                    .then((response) => response.data);
            },
            refetchInterval: 25000,
        });

    return (
        <>
            <div className={styles.userOnline}>
                <div className={styles.userOnlineContainer}>
                    <div className={styles.userOnlineInfo}>
                        <p className={styles.userOnlineText}>
                            Bienvenido: <span> {session?.user.userName} &nbsp;</span>
                        </p>
                        <>
                            <p className={styles.userBalanceText}>
                                Balance:
                                <span className={styles.userBalance}>
                                    {data?.balance} {data?.currencyCode}
                                </span>
                            </p>
                            <p className={styles.userBalanceText}>
                                Bonos:
                                <span className={styles.tooltip}>
                                    <span className={styles.userBalance}>
                                        {data?.bonus
                                            ? data?.bonus.map((bonusData: any, index: number) => {
                                                bonoTotalVar = bonoTotalVar + bonusData.amount;
                                            })
                                            : "No tiene."}
                                        {bonoTotalVar} {data?.currencyCode}
                                    </span>

                                    <span className={styles.tooltiptext}>
                                        {data?.bonus
                                            ? data?.bonus.map((bonusData: any, index: number) => {
                                                return (
                                                    <span className={styles.group} key={`Bonus-${index}`}>
                                                        <span className={styles.group__title} key={`span1-${index}`}>{bonusData.group}: </span>
                                                        <span className={styles.group__amount} key={`span2-${index}`}>
                                                            {bonusData.amount} {data?.currencyCode}
                                                        </span>{" "}
                                                    </span>
                                                );
                                            })
                                            : "No tiene Bonos."}
                                    </span>
                                </span>
                            </p>
                        </>
                    </div>
                    <div className={styles.userOnlineClose}>
                        <button
                            onClick={handleRedirect}
                            className={styles.userConfigBtn}
                        >
                            <Image className={styles.icon} src="/icon/ConfigIcon.svg" alt="config icon" width={40} height={40} />
                        </button>
                    </div>
                </div>
                <SignOutBtn />
            </div>
        </>
    )
}