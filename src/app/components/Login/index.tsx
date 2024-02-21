"use client";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import styles from './Login.module.css';
import * as Yup from 'yup';
interface Values {
    firstName: string;
    lastName: string;
    email: string;
}
const SignupSchema = Yup.object().shape({
    userName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Se requiere un usuario'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Se requiere la contraseña'),
});

export const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.login_title}>CARIBEAPUESTA.COM</h2>
            <Formik
                initialValues={{ userName: '', password: '' }}
                onSubmit={(values) => {
                    // Handle form submission logic here
                    console.log('Form values:', values);
                }}
                validationSchema={SignupSchema}
            >
                {({ errors, touched }) => (
                    <>
                        <Form className={styles.loginForm}>
                            <div className={styles.login_linksContainer}>
                                <a href="https://cliente.caribeapuesta.bet/apuestacaribe/Registrate" className={styles.login_links}>REGISTRATE</a>
                                <button className={styles.login_links} type="submit">INGRESAR</button>
                            </div>
                            <div className={styles.loginForm_content}>

                                <div className={styles.formGroup}>
                                    <label htmlFor="userName" hidden>Usuario:</label>
                                    <Field
                                        className={`${styles.loginInput} ${errors.userName && touched.userName && styles.errorInput}`}
                                        type="text" id="userName" name="userName" placeholder="Usuario" />

                                    <div className={styles.userAdminLinkContainer}>
                                        <a href="" className={styles.userAdminLink}>Recordar mi usuario</a>
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="password" hidden>Password:</label>
                                    <Field
                                        className={`${styles.loginInput} ${errors.password && touched.password && styles.errorInput}`}
                                        type="password" id="password" name="password" placeholder="Contraseña" />
                                    <div className={styles.userAdminLinkContainer}>
                                        <a href="" className={styles.userAdminLink}>¿ Contraseña olvidada ?</a>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </>
                )}
            </Formik>
        </div>
    );
};

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

export default { Login, PrevLogin }