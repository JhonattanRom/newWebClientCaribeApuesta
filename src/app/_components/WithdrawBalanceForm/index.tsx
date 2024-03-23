"use client";
import styles from "./styles.module.css";
import * as Yup from 'yup';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserBankAccountList } from "@/app/_mockData/UserBankAccountList";
import { useState } from "react";

const schema = Yup.object({
    bankAccountId: Yup.string()
        .required('Se requiere una cuenta bancaria.'),
    amount: Yup.number()
        .required('Se requiere un monto a retirar.'),
}).required();

const optionsBanks = UserBankAccountList.map((bank) => {
    return { value: bank.id, label: `${bank.accountBankEntity} - ${bank.accountBankCode + bank.accountBankNumber}` }
});

export default function WithdrawBalanceForm() {
    const [isEnabledAllAmount, setEnableAllAmount] = useState<any>(true);
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
        defaultValues: {
            bankAccountId: "",
        },
    })
    const enableAllAmount = (isEnable: boolean) => {
        setValue("amount", isEnable == true ? 1000 : 1);
        setEnableAllAmount(isEnable);
    }
    const handleChange = (e: { target: { value: any; }; }) => {
        const inputValue = e.target.value;
        const parsedValue = parseFloat(inputValue);
        const newValue = isNaN(parsedValue) ? 0 : parsedValue;
        // Update your state with newValue
    };
    const onSubmit = (data: any) => console.log(data);
    const initialValue = isEnabledAllAmount == true ? 1000 : 1; 
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
        >
            <div className={styles.formContent}>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label>Retiro de saldo:</label>
                        <div
                            className={`${styles.caribeInput} ${styles.caribeRadioGroup}`}
                            aria-label="retireType"
                        >
                            <label>
                                <input
                                    type="radio"
                                    checked={isEnabledAllAmount === false}
                                    onChange={(e) => enableAllAmount(false)}
                                />{" "}
                                Otro Monto
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    checked={isEnabledAllAmount === true}
                                    onChange={(e) => enableAllAmount(true)}
                                />{" "}
                                Retiro total
                            </label>
                        </div>
                    </div>
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
                                max: {
                                    value: 1000,
                                    message: "Se paso del limite de su saldo."
                                },
                                value: initialValue | 0, // Establece el valor según la condición
                            })} // Establece los valores mínimo y máximo aquí
                            placeholder={`Monto a retirar: ${isEnabledAllAmount ? "All" : "custom"}`}
                            disabled={isEnabledAllAmount}
                            onChange={handleChange}
                        />
                        {errors.amount && <span className="errorMsg">{errors.amount.message}</span>}
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={`${errors.bankAccountId && styles.errorLabel}`} htmlFor="bankAccountId">Banco:</label>
                        <Controller
                            name="bankAccountId"
                            control={control}
                            render={({ field }) => (
                                <select {...field} className={`${styles.caribeInput} ${errors.bankAccountId && styles.errorInput}`}>
                                    <option value="" disabled >Seleccione una cuenta bancaria</option>
                                    {optionsBanks.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                        {errors.bankAccountId && <span className="errorMsg">{errors.bankAccountId.message}</span>}
                    </div>
                </div>
            </div>
            <button className={styles.caribeButton} type="submit">Retirar</button>
        </form>
    )
}
