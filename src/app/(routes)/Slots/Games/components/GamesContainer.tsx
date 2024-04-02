'use client'
import { pragmaticSlotsList } from "@/app/_mockData/pragmaticSlotsList";
import GamesFilter from "./GamesFilter";
import GamesList from "./GamesList";
import styles from "../styles.module.css";
export default function GamesContainer() {
    return (
        <div className={styles.gamesContainer}>
            <GamesList list={pragmaticSlotsList}/>
            <GamesFilter />
        </div>
    )
}