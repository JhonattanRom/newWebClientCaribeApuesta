"use client";
import styles from "./styles.module.css";
import * as Yup from 'yup';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask, { Props } from "react-input-mask";
import React from "react";

const schema = Yup.object({
    firstName: Yup.string()
        .min(2, 'Nombre muy corto.')
        .max(50, 'Nombre muy largo')
        .required('El nombre es obligatorio'),
    lastName: Yup.string()
        .min(2, 'Apellido muy corto.')
        .max(50, 'Apellido muy largo')
        .required('El apellido es obligatorio'),
    username: Yup.string()
        .min(2, 'Nombre de usuario muy corto.')
        .max(50, 'Nombre de usuario muy largo')
        .required('El nombre de usuario es obligatorio'),
    birthdate: Yup.string()
        .required('Se requiere una fecha.'),
    email: Yup.string()
        .required('Se requiere un email')
        .min(2, 'Email muy corto')
        .max(50, 'Email muy largo')
        .email('Se requiere un email valido'),

    password: Yup.string()
        .required('La contraseña es obligatoria')
        .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    currencyCode: Yup.string().required('Se requerie una moneda'),
    identification: Yup.string()
        .required('Se requiere una Identificación')
        .min(1, 'Identificación muy corta')
        .max(50, 'Identificación muy larga')
        .matches(/^[0-9]{5,9}$/, 'Formato incorrecto'),
    identType: Yup.string(),
    termsAndCondition: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required')
}).required();

const currencyOptions = [
    { value: 'USD', label: 'USD - US Dollar' },
    { value: 'EUR', label: 'EUR - Euro' },
    // Add more currency options here
];

export default function RegisterUserForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
        defaultValues: {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            birthdate: "",
            password: "",
            currencyCode: "",
            identification: "",
            identType: "V",
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
                        <label className={`${errors.firstName && styles.errorLabel}`} htmlFor="firstName" >Nombre:</label>
                        <input
                            className={`${styles.caribeInput} ${errors.firstName && styles.errorInput}`}
                            {...register('firstName')}
                            placeholder="Nombre"
                        />
                        {errors.firstName && <span className="errorMsg">{errors.firstName.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={`${errors.lastName && styles.errorLabel}`} htmlFor="lastName" >Apellido:</label>
                        <input
                            className={`${styles.caribeInput} ${errors.lastName && styles.errorInput}`}
                            {...register('lastName')}
                            placeholder="Apellido"
                        />
                        {errors.lastName && <span className="errorMsg">{errors.lastName.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={`${errors.username && styles.errorLabel}`} htmlFor="username" >Nombre de usuario:</label>
                        <input
                            className={`${styles.caribeInput} ${errors.username && styles.errorInput}`}
                            {...register('username')}
                            placeholder="Nombre de usuario"
                        />
                        {errors.username && <span className="errorMsg">{errors.username.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={`${errors.birthdate && styles.errorLabel}`} htmlFor="birthdate" >Fecha de nacimiento:</label>
                        <InputMask mask="99/99/9999"
                            placeholder="Fecha de nacimiento"
                            className={`${styles.caribeInput} ${errors.birthdate && styles.errorInput}`}
                            {...register("birthdate", {
                                required: "Se requiere una fecha de nacimiento.",
                                pattern: {
                                    value:
                                        /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{4})$/,
                                    message: "Formato de fecha dd/mm/aaaa",
                                },
                                maxLength: {
                                    value: 50,
                                    message: "longitud maxima 10",
                                },
                            })}
                        />
                        {errors.birthdate && <span className="errorMsg">{errors.birthdate.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={`${errors.email && styles.errorLabel}`} htmlFor="email" >Email:</label>
                        <input
                            className={`${styles.caribeInput} ${errors.email && styles.errorInput}`}
                            {...register('email')}
                            placeholder="Email"
                        />
                        {errors.email && <span className="errorMsg">{errors.email.message}</span>}
                    </div>
                </div>
                <div className={styles.row}>
                    <div className={styles.formGroup}>
                        <label className={`${errors.password && styles.errorLabel}`} htmlFor="password" >Contraseña:</label>
                        <input
                            className={`${styles.caribeInput} ${errors.password && styles.errorInput}`}
                            {...register('password')}
                            placeholder="Contraseña"
                        />
                        {errors.password && <span className="errorMsg">{errors.password.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={`${errors.currencyCode && styles.errorLabel}`} htmlFor="currencyCode">Moneda:</label>
                        <Controller
                            name="currencyCode"
                            control={control}
                            render={({ field }) => (
                                <select {...field} className={`${styles.caribeInput} ${errors.currencyCode && styles.errorInput}`}>
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
                    <div className={styles.formGroup}>
                        <label className={`${errors.identification && styles.errorLabel}`} htmlFor="identification" >Identificación:</label>
                        <input
                            type="text"
                            className={`${styles.caribeInput} ${errors.identification && styles.errorInput}`}
                            placeholder="Identificación"
                            aria-label="Identificación"
                            {...register("identification")} />
                        {errors.identification && <span className="errorMsg">{errors.identification.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <fieldset
                            className={`${styles.caribeInput} ${errors.identType && styles.errorInput}`}
                            aria-label="Identificación"
                            {...register("identType")}
                        >
                            <legend>Tipo de documento.</legend>
                            <label>
                                <input
                                    value="V"
                                    type="radio"
                                    {...register("identType")}
                                />{" "}
                                Venezolano
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="E"
                                    {...register("identType")}
                                />{" "}
                                Extranjero
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="P"
                                    {...register("identType")}
                                />{" "}
                                Pasaporte
                            </label>
                        </fieldset>
                        {errors.identType && <span className="errorMsg">{errors.identType.message}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <div className={styles.checkBox}>
                            <input
                                className={`${styles.checkBox_Input} ${errors.termsAndCondition && styles.checkBox_Input_error}`}
                                type="checkbox"
                                {...register("termsAndCondition", {
                                    required: "Acepte los terminos y condiciones.",
                                })}
                            />
                            <label
                                htmlFor="termsAndCondition"
                                className={`${styles.form__Check__label} ${errors.termsAndCondition && styles.errorLabel}`}
                            >
                                Acepto términos y condiciones
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <button className={styles.login_links} type="submit">Registrar</button>
        </form>

    );
};

