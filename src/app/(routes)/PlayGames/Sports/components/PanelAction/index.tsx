
'use client'
import styles from './styles.module.css';

interface PanelActionProps {
    handleLeftSide: () => void;
    handleRightSide: () => void;
    leftSideIsOpen: boolean;
    rightSideIsOpen: boolean;
}


export default function PanelAction({ handleLeftSide, handleRightSide, leftSideIsOpen, rightSideIsOpen }: PanelActionProps) {


    return (
        <div className={styles.panelActionContainer}>
            <div className={styles.actions}>
                <button onClick={handleLeftSide} className={`${styles.btn} ${styles.panelAction_btn} ${leftSideIsOpen ? styles.sideOpen : ''}`}>MenuEvents</button>
                <button onClick={handleRightSide} className={`${styles.btn} ${styles.panelAction_btn} ${rightSideIsOpen ? styles.sideOpen : ''}`}>TicketArea</button>
            </div>
        </div>
    )
}