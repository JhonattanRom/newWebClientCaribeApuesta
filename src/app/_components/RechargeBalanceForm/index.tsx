"use client";
import styles from "./styles.module.css";
import * as Yup from 'yup';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserBankAccountList } from "@/app/_mockData/UserBankAccountList";
import { PartnerBanksList } from "@/app/_mockData/PartnerBanksList";

const schema = Yup.object({
    bankOrigenAccountId: Yup.string()
        .required('Se requiere una cuenta bancaria.'),
    bankAssociatedAccountId: Yup.string()
        .required('Se requere una cuenta bancaria de asociado.'),
    amount: Yup.number()
        .required('Se requiere un monto a retirar.'),
    transactionReference: Yup.string()
        .required('Se requiere la referencia de transacción.')
        .min(2, "Referencia no valida.")
        .max(30, "Referencia no valida."),
    transactionDate: Yup.string()
        .required('Se requiere la fecha de transacción.')
}).required()
const userBankAccountOptions = UserBankAccountList.map((bank) => {
    return { value: bank.id, label: `${bank.accountBankEntity} - ${bank.accountBankCode + bank.accountBankNumber}` }
});
const associatedBankAccountOptions = PartnerBanksList.map((bank) => {
    return { value: bank.id, label: `${bank.nmbancoTransf} - ${bank.nuCuentaBancoTransf}` }
});
export default function RechargeBalanceForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
        defaultValues: {
            bankOrigenAccountId: "",
            bankAssociatedAccountId: "",
        },
    })

    const onSubmit = (data: any) => console.log(data);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
        >
            <div className={styles.formContent}>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={`${errors.amount && styles.errorLabel}`} htmlFor="firstName" >Monto:</label>
                        <input
                            type="number"
                            minLength={1}
                            className={`${styles.caribeInput} ${errors.amount && styles.errorInput}`}
                            {...register('amount', {
                                min: {
                                    value: 1,
                                    message: "El valor minimo es 1."
                                },
                                value: 0, // Establece el valor según la condición
                            })} // Establece los valores mínimo y máximo aquí
                            placeholder={`Monto a recargar`}
                        />
                        {errors.amount && <span className="errorMsg">{errors.amount.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={`${errors.transactionReference && styles.errorLabel}`} htmlFor="transactionReference" >Referencia de transacción:</label>
                        <input
                            type="text"
                            className={`${styles.caribeInput} ${errors.transactionReference && styles.errorInput}`}
                            {...register('transactionReference')} // Establece los valores mínimo y máximo aquí
                            placeholder={`Referencia de transacción`}
                        />
                        {errors.transactionReference && <span className="errorMsg">{errors.transactionReference.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={`${errors.transactionDate && styles.errorLabel}`} htmlFor="transactionDate" >Fecha de transferencia:</label>
                        <input
                            type="text"
                            className={`${styles.caribeInput} ${errors.transactionDate && styles.errorInput}`}
                            {...register('transactionDate')} // Establece los valores mínimo y máximo aquí
                            placeholder={`Fecha de transferencia`}
                        />
                        {errors.transactionDate && <span className="errorMsg">{errors.transactionDate.message}</span>}
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={`${errors.bankOrigenAccountId && styles.errorLabel}`} htmlFor="bankAccountId">Banco origen:</label>
                        <Controller
                            name="bankOrigenAccountId"
                            control={control}
                            render={({ field }) => (
                                <select {...field} className={`${styles.caribeInput} ${errors.bankOrigenAccountId && styles.errorInput}`}>
                                    <option value="" disabled >Seleccione una cuenta bancaria</option>
                                    {userBankAccountOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                        {errors.bankOrigenAccountId && <span className="errorMsg">{errors.bankOrigenAccountId.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={`${errors.bankAssociatedAccountId && styles.errorLabel}`} htmlFor="bankAssociatedAccountId">Banco asociado:</label>
                        <Controller
                            name="bankAssociatedAccountId"
                            control={control}
                            render={({ field }) => (
                                <select {...field} className={`${styles.caribeInput} ${errors.bankAssociatedAccountId && styles.errorInput}`}>
                                    <option value="" disabled >Seleccione una cuenta bancaria</option>
                                    {associatedBankAccountOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                        {errors.bankAssociatedAccountId && <span className="errorMsg">{errors.bankAssociatedAccountId.message}</span>}
                    </div>
                </div>
            </div>
            <button className={styles.caribeButton} type="submit">Recargar</button>
        </form>
    )
}