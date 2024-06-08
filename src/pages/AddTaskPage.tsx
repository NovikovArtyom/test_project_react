import styles from './styles/AddTaskPage.module.css'
import {SubmitButton} from "../UI-components/SubmitButton";
import {InputText} from "../UI-components/InputText";
import {LayoutTitle} from "../UI-components/LayoutTitle";
import React, {useEffect} from "react";
import {InputError} from "../UI-components/InputError";
import {SuccessModal} from "../UI-components/SuccessModal";
import {useNavigate} from "react-router-dom";

export function AddTaskPage() {
    const navigate = useNavigate();

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [error, setError] = React.useState('');
    const [activeErrorModal, setActiveErrorModal] = React.useState(false);
    const [success, setSuccess] = React.useState('');
    const [activeSuccessModal, setActiveSuccessModal] = React.useState(false);
    const [item, setItem] = React.useState<string | null>("");

    useEffect(() => {
        setItem(localStorage.getItem("token"));
    }, []);

    const newTask = {
        title: title,
        description: description,
    };

    async function addNewTask() {
        try {
            setSuccess('');
            setError('');
            const response = await fetch("http://localhost:8080/taskApi/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${item}`,
                },
                body: JSON.stringify(newTask)
            });

            const text = await response.text();
            console.log(response.status);

            if (response.status === 201 || response.status === 200) {
                setSuccess(`Задача "${newTask.title}" успешно сохранена!`);
                setActiveSuccessModal(true);
                setTimeout(() => {
                    setActiveSuccessModal(false);
                }, 1500);
            } else if (response.status === 401) {
                setError('Необходимо авторизоваться!');
                setActiveErrorModal(true);
                setTimeout(() => {
                    setActiveErrorModal(false);
                    navigate('/login');
                }, 1500);
            } else {
                setError(text);
                setActiveErrorModal(true);
                setTimeout(() => {
                    setActiveErrorModal(false);
                }, 1500);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (newTask.title === "") {
                setActiveErrorModal(true);
                setError('Не заполнено поле "Наименование задачи"!');
                setTimeout(() => {
                    setActiveErrorModal(false);
                }, 3000);
            } else if (newTask.description === "") {
                setActiveErrorModal(true);
                setError('Не заполнено поле "Описание задачи"!');
                setTimeout(() => {
                    setActiveErrorModal(false);
                }, 3000);
            } else {
                setError('');
                setActiveErrorModal(false);
                addNewTask();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={styles.AddTaskPage}>
            <form className={styles.AddTaskPage_form}>
                <LayoutTitle text={'Добавить задачу'}/>
                <InputText
                    text={"Наименование задачи"}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}/>
                <InputText
                    text={"Описание задачи"}
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}/>
                <SubmitButton
                    text={"Сохранить"}
                    onClick={handleClick}/>
            </form>
            <InputError
                text={error}
                active={activeErrorModal}
            />
            <SuccessModal
                text={success}
                active={activeSuccessModal}/>
        </div>
    );
}
