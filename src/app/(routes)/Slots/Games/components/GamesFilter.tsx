'use client'
import styles from '../styles.module.css';
import Image from "next/image";

export default function GamesFilter() {
    return (
        <div className={styles.gamesFilterContainer}>
            {
            /* 
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
            </Collapsible>*/}
            <section className={styles.filter}>
                <div className={styles.slotsFilterList}>
                    <div className={styles.header}>
                        <button className={styles.clearFilter}>Limpiar filtros</button>
                    </div>
                    <div className={styles.twoIconFilters}>
                        <div className={styles.iconFilter}>
                            <Image className={styles.gameImg} src={'/icon/playIcon.svg'}alt="Game img" width={60} height={60} />
                            <span>Recientes</span>
                        </div>
                        <div className={styles.iconFilter}>
                            <Image className={styles.gameImg} src={'/icon/playIcon.svg'}alt="Game img" width={60} height={60} />
                            <span>Favoritos</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.filter}>
                <div className={styles.filter__title}>
                    <h3> COLLECTIONS </h3>
                </div>
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
            </section>
        </div>
    )
}