import styles from './RegistrationPage.module.css'
import {LayoutTitle} from "../UI-components/LayoutTitle";
import {InputText} from "../UI-components/InputText";
import Select, {SingleValue} from 'react-select';
import {SubmitButton} from "../UI-components/SubmitButton";
import React, {useState} from "react";
import {InputError} from "../UI-components/InputError";

export function RegistrationPage() {
    type RoleOption = {
        value: string;
        label: string;
    };

    const roles: RoleOption[] = [
        {value: 'USER', label: 'Пользователь'},
        {value: 'ADMIN', label: 'Администратор'},
        {value: 'DOLBOEB', label: 'Новиков Артём'}
    ];

    const [fullName, setFullName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState<SingleValue<RoleOption>>(roles[0]);
    const [activeModal, setActiveModal] = React.useState(false);
    const [error, setError] = React.useState('');

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newUser = {
                fullName: fullName,
                login: login,
                password: password,
                role: role?.value
            };

            if (fullName === "") {
                setActiveModal(true);
                setError('Не заполнено поле "ФИО"!');
                setTimeout(() => {
                    setActiveModal(false);
                }, 3000);
            } else if (login === "") {
                setActiveModal(true);
                setError('Не заполнено поле "Логин"!');
                setTimeout(() => {
                    setActiveModal(false);
                }, 3000);
            } else if (password === "") {
                setActiveModal(true);
                setError('Не заполнено поле "Пароль"!');
                setTimeout(() => {
                    setActiveModal(false);
                }, 3000);
            } else {
                setActiveModal(false);
                setError('');
                fetch("http://localhost:8080/registration", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newUser)
                    }
                );
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
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    text={"ФИО"}/>
                <InputText
                    text={"Логин"}
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}/>
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
                    active={activeModal}
                    setActive={setActiveModal}/>
            </form>
        </div>
    );
}
