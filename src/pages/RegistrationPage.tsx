import styles from './RegistrationPage.module.css'
import {LayoutTitle} from "../UI-components/LayoutTitle";
import {InputText} from "../UI-components/InputText";
import Select, {SingleValue} from 'react-select';
import {SubmitButton} from "../UI-components/SubmitButton";
import {useState} from "react";

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
    const [role, setRole] = useState<SingleValue<RoleOption>>(null);

    const handleClick = (e: React.FormEvent) => {
        try {
            const newUser = {
                fullName: fullName,
                login: login,
                password: password,
                role: role?.value
            };

            console.log(newUser);

            fetch("http://localhost:8080/registration", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newUser)
                }
            );
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
            </form>
        </div>
    );
}
