
'use client'
import { useState } from 'react';
import { LeftSideMenuContainer } from '../LeftSideMenuContainer';
import PanelAction from '../PanelAction';
import styles from './styles.module.css';
import { RightSideMenuContainer } from '../RightSideMenuContainer';
import { FeaturedGamesContainer } from '../FeatureGamesContainer';
import DisponibleBetsTable from '../DisponibleBetsTable';

export default function SportsGamesContainer() {
    const [leftSideIsOpen, handleLeftSideOpen] = useState(false);
    const [rightSideIsOpen, handleRightSideOpen] = useState(false);

    const handleOpenLeftSide = () => {
        handleRightSideOpen(false);
        return handleLeftSideOpen(!leftSideIsOpen);
    }
    const handleOpenRightSide = () => {
        handleLeftSideOpen(false);
        return handleRightSideOpen(!rightSideIsOpen);
    }
    return (<>
        <div className={styles.container}>
            <LeftSideMenuContainer isOpen={leftSideIsOpen} />
            <div className={styles.gamesMainContainer}>
                <FeaturedGamesContainer />
                <DisponibleBetsTable />
            </div>
            <RightSideMenuContainer isOpen={rightSideIsOpen} />
        </div>
        <PanelAction handleLeftSide={handleOpenLeftSide} handleRightSide={handleOpenRightSide} />
    </>
    )
}