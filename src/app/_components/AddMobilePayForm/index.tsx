"use client";
import styles from "./styles.module.css";
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object({
    mobilePay: Yup.string()
        .required('Se requiere un número de tlf.')
        .max(50, 'Número de usuario muy largo.'),
    accountId: Yup.number()
        .required('Se requiere el id de la cuenta bancaria')
}).required()

export default function AddMobilePayForm({ accountId }: { accountId: number }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
        defaultValues: {
            mobilePay: "",
            accountId: accountId
        },
    })
    const onSubmit = (data: any) => console.log(data);

    return (
        <>
            <h2>Agregar Pago Movil </h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
            >
                <div className={styles.formGroup}>
                    <label className={`${errors.mobilePay && styles.errorLabel}`} htmlFor="mobilePay" >Número de tlf:</label>
                    <input
                        className={`${styles.loginInput} ${errors.mobilePay && styles.errorInput}`}
                        {...register('mobilePay')}
                        placeholder="Número de tlf"
                    />
                    {errors.mobilePay && <span className="errorMsg">{errors.mobilePay.message}</span>}
                </div>
                <button className={styles.login_links} type="submit" >Agregar</button>
            </form>
        </>
    )
}