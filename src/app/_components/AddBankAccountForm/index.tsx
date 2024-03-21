"use client";
import styles from "./styles.module.css";
import * as Yup from 'yup';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { InstitutionBankList } from "@/app/_mockData/InstitutionBankList";
const schema = Yup.object({
    bankId: Yup.string()
        .required('Se requiere el banco.'),
    accountType: Yup.string()
        .required('Se requiere el tipo de cuenta.'),
    accountNumber: Yup.string()
        .min(2, 'Nombre muy corto.')
        .max(50, 'Nombre muy largo')
        .required('Se requiere el número de cuenta.'),
    accountOwnerName: Yup.string()
        .min(2, 'Nombre de usuario muy corto.')
        .max(50, 'Nombre de usuario muy largo')
        .required('Se requiere el nombre completo.'),
    accountOwnerDNI: Yup.string()
        .required('Se requiere una Identificación')
        .min(1, 'Identificación muy corta')
        .max(50, 'Identificación muy larga')
        .matches(/^[0-9]{5,9}$/, 'Formato incorrecto'),
    accountOwnerDNIType: Yup.string(),
}).required();

const optionsBanks = InstitutionBankList.map((bank) => {
    return { value: bank.id, label: bank.name }
});
const optionsBanksTypes = [
    { value: "1", label: "Ahorro" },
    { value: "2", label: "Corriente" },
];
export default function AddBankAccountForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
        defaultValues: {
            accountNumber: "",
            accountOwnerName: "",
            accountOwnerDNI: "",
            accountOwnerDNIType: "V",
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
                        <label className={`${errors.bankId && styles.errorLabel}`} htmlFor="bankId">Banco:</label>
                        <Controller
                            name="bankId"
                            control={control}
                            render={({ field }) => (
                                <select {...field} className={`${styles.caribeInput} ${errors.bankId && styles.errorInput}`}>
                                    <option value="" disabled >Seleccione un banco</option>
                                    {optionsBanks.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                        {errors.bankId && <span className="errorMsg">{errors.bankId.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={`${errors.accountType && styles.errorLabel}`} htmlFor="accountType">Tipo de cuenta:</label>
                        <Controller
                            name="accountType"
                            control={control}
                            render={({ field }) => (
                                <select {...field} className={`${styles.caribeInput} ${errors.accountType && styles.errorInput}`}>
                                    <option value="" disabled >Seleccione un tipo de cuenta</option>
                                    {optionsBanksTypes.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            )}
                        />
                        {errors.accountType && <span className="errorMsg">{errors.accountType.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={`${errors.accountNumber && styles.errorLabel}`} htmlFor="accountNumber" >Nro. de cuenta:</label>
                        <input
                            className={`${styles.caribeInput} ${errors.accountNumber && styles.errorInput}`}
                            {...register('accountNumber')}
                            placeholder="Nro. de cuenta"
                        />
                        {errors.accountNumber && <span className="errorMsg">{errors.accountNumber.message}</span>}
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={`${errors.accountOwnerDNI && styles.errorLabel}`} htmlFor="accountOwnerDNI" >Identificación:</label>
                        <input
                            type="text"
                            className={`${styles.caribeInput} ${errors.accountOwnerDNI && styles.errorInput}`}
                            placeholder="Identificación"
                            aria-label="Identificación"
                            {...register("accountOwnerDNI")} />
                        {errors.accountOwnerDNI && <span className="errorMsg">{errors.accountOwnerDNI.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <fieldset
                            className={`${styles.caribeInput} ${errors.accountOwnerDNIType && styles.errorInput}`}
                            aria-label="accountOwnerDNIType"
                            {...register("accountOwnerDNIType")}
                        >
                            <legend>Tipo de documento.</legend>
                            <label>
                                <input
                                    value="V"
                                    type="radio"
                                    {...register("accountOwnerDNIType")}
                                />{" "}
                                Venezolano
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="E"
                                    {...register("accountOwnerDNIType")}
                                />{" "}
                                Extranjero
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="P"
                                    {...register("accountOwnerDNIType")}
                                />{" "}
                                Pasaporte
                            </label>
                        </fieldset>
                        {errors.accountOwnerDNIType && <span className="errorMsg">{errors.accountOwnerDNIType.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={`${errors.accountOwnerName && styles.errorLabel}`} htmlFor="accountOwnerName" >Nombre completo:</label>
                        <input
                            type="text"
                            className={`${styles.caribeInput} ${errors.accountOwnerName && styles.errorInput}`}
                            placeholder="Nombre completo"
                            aria-label="Identificación"
                            {...register("accountOwnerName")} />
                        {errors.accountOwnerName && <span className="errorMsg">{errors.accountOwnerName.message}</span>}
                    </div>
                </div>
            </div>
            <button className={styles.login_links} type="submit">Agregar</button>
        </form>

    );
};

