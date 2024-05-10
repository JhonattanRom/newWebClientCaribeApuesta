"use client";
import styles from './styles.module.css';
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
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
                                </span>
                            </p>
                            <p className={styles.userBalanceText}>
                                Bonos:
                                <span className={styles.tooltip}>
                                    <span className={styles.userBalance}>
                                        
                                    </span>

                                    <span className={styles.tooltiptext}>
                                        
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