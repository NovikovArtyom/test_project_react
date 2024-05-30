import styles from './LoginPage.module.css'
import {LayoutTitle} from "../UI-components/LayoutTitle";
import {InputText} from "../UI-components/InputText";
import {SubmitButton} from "../UI-components/SubmitButton";

export function LoginPage() {
    return (
        <div className={styles.LoginPage}>
            <form className={styles.LoginPage_form}>
                <LayoutTitle text={"Авторизация"}/>
                <InputText text={"Логин"}/>
                <InputText text={"Пароль"}/>
                <SubmitButton text={"Войти"}/>
            </form>
        </div>
    );
}
