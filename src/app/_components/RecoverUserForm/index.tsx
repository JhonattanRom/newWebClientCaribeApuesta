"use client";
import styles from "./styles.module.css";
import * as Yup from 'yup';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


const schema = Yup.object({
    email: Yup.string()
        .required('Se requiere un email')
        .min(2, 'Email muy corto')
        .max(50, 'Email muy largo')
        .email('Se requiere un email valido'),
    currencyCode: Yup.string().required('Se requerie una moneda'),

}).required();

type FormData = {
    email: string
    currencyCode: string
}

const currencyOptions = [
    { value: 'USD', label: 'USD - US Dollar' },
    { value: 'EUR', label: 'EUR - Euro' },
    // Add more currency options here
];

export default function RecoverUserForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        criteriaMode: "all",
        defaultValues: {
            email: "",
            currencyCode: ""
        },
    })
    const onSubmit = (data: any) => console.log(data);
    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
            >
                <div className={styles.formGroup}>
                    <label className={`${errors.email && styles.errorLabel}`} htmlFor="email" >Email:</label>
                    <input
                        className={`${styles.loginInput} ${errors.email && styles.errorInput}`}
                        placeholder="Email"
                        {...register('email')}
                    />
                    {errors.email && <span className="errorMsg">{errors.email.message}</span>}
                </div>
                <div className={styles.formGroup}>
                    <label className={`${errors.currencyCode && styles.errorLabel}`} htmlFor="currencyCode">Moneda:</label>
                    <Controller
                        name="currencyCode"
                        control={control}
                        render={({ field }) => (
                            <select {...field} className={`${styles.loginInput} ${errors.currencyCode && styles.errorInput}`}>
                                <option value="" disabled >Seleccione una moneda</option>
                                {currencyOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        )}
                    />
                    {errors.currencyCode && <span className="errorMsg">{errors.currencyCode.message}</span>}

                </div>
                <button className={styles.login_links} type="submit">Recuperar Usuario</button>
            </form>
        </>
    )
}