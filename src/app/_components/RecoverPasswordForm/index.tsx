"use client";
import styles from "./styles.module.css";
import * as Yup from 'yup';
import Modal from "../Modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object({
    userName: Yup.string()
        .required('Se requiere un nombre de usuario.')
        .min(2, 'Nombre de usuario muy corto.')
        .max(50, 'Nombre de usuario muy largo.'),
}).required()

export default function RecoverPasswordForm() {
    const [isMounted, seMountedModal] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
        defaultValues: {
            userName: "",
        },
    })
    const onSubmit = (data: any) => {
        console.log(data);
        seMountedModal(true);
    }

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
            >
                <div className={styles.formGroup}>
                    <label className={`${errors.userName && styles.errorLabel}`} htmlFor="userName" >Nombre de usuario:</label>
                    <input
                        className={`${styles.loginInput} ${errors.userName && styles.errorInput}`}
                        {...register('userName')}
                        placeholder="Nombre de usuario"
                    />
                    {errors.userName && <span className="errorMsg">{errors.userName.message}</span>}
                </div>
                <button className={styles.login_links} type="submit" >Recuperar contraseña</button>
            </form>
            <Modal seMountedModal={seMountedModal} isMounted={isMounted}>
                <div className={styles.modalContent}>
                    <h3>
                        Sus datos de usuario fueron enviados al correo electrónico vinculado a la cuenta.
                    </h3>
                </div>
            </Modal>
        </>
    )
}