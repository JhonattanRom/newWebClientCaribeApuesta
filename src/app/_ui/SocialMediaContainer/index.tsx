import styles from "./styles.module.css";
import Image from "next/image";
import Link from 'next/link'

export const SocialMediaContainer = () => {
    return (
        <div className={styles.SocialMediaContainer}>
            <div className={styles.Toggle_Title}>
                <Image
                    src={"/caribeApuestaLogo.svg"}
                    alt={"Caribe Apuesta Logo"}
                    width={50} height={50}
                />
                <Link href="/">CARIBE APUESTA</Link>
            </div>
            <div className={styles.mediaIcons}>
                <Image className={styles.mediaIcon} src="/icon/CaribeInstagram.svg" alt="Burguer icon" width={60} height={60} />
                <Image className={styles.mediaIcon} src="/icon/CaribeWhatsapp.svg" alt="Burguer icon" width={60} height={60} />
                <Image className={styles.mediaIcon} src="/icon/CaribeYoutube.svg" alt="Burguer icon" width={60} height={60} />
            </div>
        </div>
    )
}