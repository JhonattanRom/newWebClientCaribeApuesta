
'use client'
import styles from './styles.module.css';

export default function PanelAction({ handleLeftSide, handleRightSide }: { handleLeftSide: () => void; handleRightSide: () => void; }) {


    return (
        <div className={styles.panelActionContainer}>
            <div className={styles.actions}>
                <button onClick={handleLeftSide} className={`${styles.btn} ${styles.panelAction_btn}`}>MenuEvents</button>
                <button onClick={handleRightSide} className={`${styles.btn} ${styles.panelAction_btn}`}>TicketArea</button>
            </div>
        </div>
    )
}