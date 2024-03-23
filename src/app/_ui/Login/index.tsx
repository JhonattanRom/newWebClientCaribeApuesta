"use client";
import styles from './Login.module.css';
import * as Yup from 'yup';
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";


const schema = Yup.object().shape({
    userName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Se requiere un usuario'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Se requiere la contraseña'),
});

export const Login = ({ container }: { container: boolean }) => {
    const { data: session, status } = useSession();
    console.log({ session, status });
    if (status === "loading") {
        return <p>Loading...</p>;
    }
    if (session) {
        return <UserInfo session={session} />
    }
    return (
        <LoginForm container={container} />
    );
};
const LoginForm = ({ container }: { container: boolean }) => {

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
    });

    const onSubmit = async (data: any) => {
        console.log(data, "data")
        const responseNextAuth = await signIn("credentials", {
            username: data.userName,
            password: data.password,
            redirect: false,
        });
        console.log(responseNextAuth, "isLoggedd ?");
        /*
        if (responseNextAuth?.error) {
          setErrors(responseNextAuth.error.split(","));
          return;
        }*/

        /* router.push("/dashboard");*/
    };


    return (
        <div className={container ? styles.loginContainer : ""}>
            <h2 className={styles.login_title}>CARIBEAPUESTA.COM</h2>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.loginForm}
            >
                <div className={styles.login_linksContainer}>
                    {/* 
                                <a href="https://cliente.caribeapuesta.bet/apuestacaribe/Registrate" className={styles.login_links}>REGISTRATE</a>
                                */}
                    <Link className={styles.login_links} href="/RegisterUser">REGISTRATE</Link>
                    <button className={styles.login_links} type="submit">INGRESAR</button>
                </div>
                <div className={styles.loginForm_content}>
                    <div className={styles.formGroup}>
                        <label htmlFor="userName" hidden>Usuario:</label>
                        <input
                            className={`${styles.loginInput} ${errors.userName && styles.errorInput}`}
                            {...register('userName')}
                            placeholder="Nombre de usuario"
                        />
                        <div className={styles.userAdminLinkContainer}>
                            <Link className={styles.userAdminLink} href="/RecoverUser">Recordar mi usuario</Link>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="password" hidden>Password:</label>
                        <input
                            className={`${styles.loginInput} ${errors.password && styles.errorInput}`}
                            {...register('password')}
                            placeholder="Contraseña"
                        />
                        <div className={styles.userAdminLinkContainer}>
                            <Link className={styles.userAdminLink} href="/RecoverPassword">¿ Contraseña olvidada ?</Link>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
}
const UserInfo = ({ session }: { session: any }) => {
    return (
        <>
            <div className={styles.userOnline}>
                <div className={styles.userOnlineContainer}>
                    <div className={styles.userOnlineInfo}>
                        <p className={styles.userOnlineText}>
                            {" "}
                            Bienvenido:{" "}
                            <span> {session.user?.userName} &nbsp;</span>
                        </p>
                        {/* <UserBalance />*/}
                    </div>
                    <div className={styles.userOnlineClose}>
                        <button
                            onClick={() => signOut({ redirect: true,})}
                            className={styles.userOnlineCloseBtn}
                        >
                            Sign out
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
const UserBalance = () => {
    
}







export const PrevLogin = () => {
    return (
        <div className={styles.prevLoginContainer}>
            <h2 className={styles.prevLogin_title}>CARIBEAPUESTA.COM</h2>
            <div className={styles.prevLogin_linksContainer}>
                <a href="https://cliente.caribeapuesta.bet/apuestacaribe/Registrate" className={styles.prevLogin_links}>REGISTRATE</a>
                <a href="https://bets.caribeapuesta.bet/bets_sagcit/frame/" className={styles.prevLogin_links}>INGRESAR</a>
            </div>
        </div>
    )
}
