import styles from "./styles.module.css";
import { PartnerBanksList as mockPartnerBanksAccount } from "@/app/_mockData/PartnerBanksList";
import { PartnerBanksList as PartnerBanksType } from "@/app/_types/BankAccount/PartnerBanksList";
export default function PartnerBanksList() {
    return (
        <section className={styles.OursBankList__Container}>
            {mockPartnerBanksAccount.map((bank: PartnerBanksType, index: number) => {
                return (
                    <div className={styles.OursBankList__Item} key={index + bank.DNITitularCuentaTransf}>
                        <h3 className={styles.OurBanksList__Item_title}>{bank.nmbancoTransf}</h3>
                        <h5>{bank.nmTitularCuentaTransf}</h5>
                        <h5>{bank.DNITitularCuentaTransf}</h5>
                        <h5>{bank.nuCuentaBancoTransf}</h5>
                    </div>
                )
            })}
        </section>
    )
}