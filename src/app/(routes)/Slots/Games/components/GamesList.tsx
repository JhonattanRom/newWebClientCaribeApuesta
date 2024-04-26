'use client'
import Image from "next/image";
import { PragmaticSlot } from "@/app/_types/Slots/PragmaticSlot";
import styles from '../styles.module.css'
export default function GamesList({ list }: { list: PragmaticSlot[] }) {
    return (
        <div className={styles.gamesListContainer}>
            <div className={styles.serchFormContainer}>
                <form action="#" className={styles.form}>
                    <input
                        className={`${styles.caribeInput}`}
                        placeholder="Buscar . . ."
                    />
                </form>
            </div>

            <div className={styles.gamesListContent}>
                {list.map((game, index) => (
                    <Game key={index} gameData={game} />
                ))}
            </div>
        </div>
    )
}

const Game = ({ key, gameData }: any) => {
    return (
        <div key={key} className={styles.game}>
            <div className={styles.gameOverlay}>
                <div className={styles.playLoad}>
                    <Image className={styles.mediaIcon} src={'/icon/playIcon.svg'} alt="play icon" width={60} height={60} />
                </div>
            </div>
            <Image className={styles.mediaIcon} src={gameData.img} alt="Burguer icon" width={320} height={200} />
        </div>
    )
}