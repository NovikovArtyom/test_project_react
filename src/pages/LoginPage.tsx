import styles from './styles/LoginPage.module.css'
import {LayoutTitle} from "../UI-components/LayoutTitle";
import {InputText} from "../UI-components/InputText";
import {SubmitButton} from "../UI-components/SubmitButton";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {InputError} from "../UI-components/InputError";
import {SuccessModal} from "../UI-components/SuccessModal";

interface accessData {
    login: string;
    password: string;
}

export function LoginPage() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState('');
    const [activeSuccessModal, setActiveSuccessModal] = useState(false);
    const [activeErrorModal, setActiveErrorModal] = useState(false);

    const user = {
        username: username,
        password: password,
    };

    async function handleSubmit() {
        try {
            localStorage.clear();
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user)
            });

            if (response.ok) {
                const body = await response.text();
                localStorage.setItem("name", user.username);
                localStorage.setItem("token", body);
                setSuccess("Пользователь успешно авторизован!");
                setActiveSuccessModal(true);
                setTimeout(() => {
                    setActiveSuccessModal(false)
                }, 3000);
                navigate('/tasks');
            } else if (response.status === 401) {
                setError("Некорректный логин или пароль!");
                setActiveErrorModal(true);
                setTimeout(() => {
                    setActiveErrorModal(false);
                }, 3000);
            } else {
                setError("Произошла ошибка авторизации!");
                setActiveErrorModal(true);
                setTimeout(() => {
                    setActiveErrorModal(false);
                }, 3000);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className={styles.LoginPage}>
            <form className={styles.LoginPage_form}>
                <LayoutTitle text={"Авторизация"}/>
                <InputText text={"Логин"} value={username} onChange={(e) => setUsername(e.target.value)}/>
                <InputText text={"Пароль"} value={password} onChange={(e) => setPassword(e.target.value)}/>
                <SubmitButton text={"Войти"} onClick={handleSubmit} />
                <InputError text={error} active={activeErrorModal} />
                <SuccessModal text={success} active={activeSuccessModal} />
            </form>
        </div>
    );
}
