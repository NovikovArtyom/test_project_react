import styles from './AddTaskPage.module.css'
import {SubmitButton} from "../UI-components/SubmitButton";
import {InputText} from "../UI-components/InputText";
import {LayoutTitle} from "../UI-components/LayoutTitle";
import React from "react";
import {InputError} from "../UI-components/InputError";

export function AddTaskPage() {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [error, setError] = React.useState('');
    const [modalActive, setModalActive] = React.useState(false);

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newTask = {
                title: title,
                description: description,
            };
            if (newTask.title === "") {
                setModalActive(true);
                setError('Не заполнено поле "Наименование задачи"!');
                setTimeout(() => {
                    setModalActive(false);
                }, 3000);
            } else if (newTask.description === "") {
                setModalActive(true);
                setError('Не заполнено поле "Описание задачи"!');
                setTimeout(() => {
                    setModalActive(false);
                }, 3000);
            } else {
                setError('');
                setModalActive(false);
                fetch("http://localhost:8080/new", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(newTask)
                });
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
                active={modalActive}
                setActive={setModalActive}
            />
        </div>
    );
}
