'use client'
import Collapsible from '@/app/_components/Collapsible';
import styles from '../styles.module.css';

export default function GamesFilter() {
    return (
        <div className={styles.gamesFilterContainer}>
            <Collapsible title={'Colecciones'}>
                <div className={styles.slotsFilterList}>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>All</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>New</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Popular</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Table Games</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Crash & Aviator</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Classic slots</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>3D Slots</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Drops & Wins</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Bingo</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Other</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Keno</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Bonus Wagering</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Exclusive</span>
                    </label>
                </div>
            </Collapsible>
            <Collapsible title={'Mecanicas'}>
                <div className={styles.slotsFilterList}>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Hold and win</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Cascade</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Megaways</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Cluster</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>{'Book of'} slots</span>
                    </label>
                </div>
            </Collapsible>
            <Collapsible title={'Caracteristicas'}>
                <div className={styles.slotsFilterList}>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Buy bonus</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Jackpot</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Progress bar</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Risk games</span>
                    </label>
                  
                </div>
            </Collapsible>
            <Collapsible title={'Tematicas'}>
                <div className={styles.slotsFilterList}>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Africa</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Vikings</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Dwarves</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Ancient Greece</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Egypt</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Animals</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Adventure</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Christmas</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Sports</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Horror</span>
                    </label>
                    <label className={styles.slotsFilterList__label}>
                        <input type="radio" name="games-category" className={styles.slotsFilterList__radio} />
                        <span className={styles.slotsFilterList__radioDesc}>Fruit</span>
                    </label>
                </div>
            </Collapsible>
        </div>
    )
}