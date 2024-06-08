import styles from './styles/RegistrationPage.module.css'
import {LayoutTitle} from "../UI-components/LayoutTitle";
import {InputText} from "../UI-components/InputText";
import Select, {SingleValue} from 'react-select';
import {SubmitButton} from "../UI-components/SubmitButton";
import React, {useState} from "react";
import {InputError} from "../UI-components/InputError";
import {SuccessModal} from "../UI-components/SuccessModal";
import {useNavigate} from "react-router-dom";

export function RegistrationPage() {
    const navigate = useNavigate();

    type RoleOption = {
        value: string;
        label: string;
    };

    const roles: RoleOption[] = [
        {value: 'USER', label: 'Пользователь'},
        {value: 'ADMIN', label: 'Администратор'},
        {value: 'DOLBOEB', label: 'Новиков Артём'}
    ];

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<SingleValue<RoleOption>>(roles[0]);
    const [activeErrorModal, setActiveErrorModal] = React.useState(false);
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');
    const [activeSuccessModal, setActiveSuccessModal] = React.useState(false);

    const newUser = {
        username: username,
        email: email,
        password: password,
        role: role?.value
    };

    async function registerUser() {
        try {
            setSuccess('');
            setError('');
            const response = await fetch("http://localhost:8080/auth/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser)
            });

            const text = await response.text(); // Ждем завершения промиса

            if (response.status === 200 || response.status === 201) {
                setSuccess(text);
                setActiveSuccessModal(true);
                setTimeout(() => {
                    setActiveSuccessModal(false);
                    navigate('/login');
                }, 1500);

            } else {
                setError(text);
                setActiveErrorModal(true);
                setTimeout(() => {
                    setActiveErrorModal(false);
                }, 3000);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (username === "") {
                setActiveErrorModal(true);
                setError('Не заполнено поле "ФИО"!');
                setTimeout(() => {
                    setActiveErrorModal(false);
                }, 3000);
            } else if (email === "") {
                setActiveErrorModal(true);
                setError('Не заполнено поле "Логин"!');
                setTimeout(() => {
                    setActiveErrorModal(false);
                }, 3000);
            } else if (password === "") {
                setActiveErrorModal(true);
                setError('Не заполнено поле "Пароль"!');
                setTimeout(() => {
                    setActiveErrorModal(false);
                }, 3000);
            } else {
                setActiveErrorModal(false);
                setError('');
                registerUser();
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className={styles.RegistrationPage}>
            <form className={styles.RegistrationPage_form}>
                <LayoutTitle text={"Регистрация"}/>
                <InputText
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    text={"Логин"}/>
                <InputText
                    text={"Электронная почта"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                <InputText
                    text={"Пароль"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <Select
                    className={styles.selectRole}
                    placeholder={'Выберите роль'}
                    options={roles}
                    value={role}
                    onChange={(selectedOption) => setRole(selectedOption)}/>
                <SubmitButton
                    text={"Сохранить"}
                    onClick={handleClick}/>
                <InputError
                    text={error}
                    active={activeErrorModal}/>
                <SuccessModal
                    text={success}
                    active={activeSuccessModal}/>
            </form>
        </div>
    );
}
