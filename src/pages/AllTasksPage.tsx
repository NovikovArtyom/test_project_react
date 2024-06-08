import {TaskString} from "../UI-components/TaskString";
import React, {useEffect} from "react";
import styles from "./styles/AllTasksPage.module.css"
import {useNavigate} from "react-router-dom";

interface Task {
    title: string;
    description: string;
}

export function AllTasksPage() {
    const navigate = useNavigate();

    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [item, setItem] = React.useState<string | null>("");
    const [activeTask, setActiveTask] = React.useState<number[]>([]);

    useEffect(() => {
        async function getAllTasks() {
            if (localStorage.getItem("token") !== null) {
                const tasks = await getTasks();
                setTasks(tasks);
            } else {
                navigate("/login");
            }
        }
        getAllTasks();
    }, []);

    useEffect(() => {
        setItem(localStorage.getItem("token"));
    }, []);

    async function getTasks() {
        try {
            const response = await fetch("http://localhost:8080/taskApi/tasks", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                }
            })
            if (response.ok) {
                console.log(response.status)
                console.log(localStorage.getItem("token"))
                const body = await response.json();
                console.log(body);
                return body;
            }
        } catch (e) {
            console.error(e);
            return [];
        }
    }

    const handleTaskClick = (index: number) => {
        setActiveTask(prevActiveTasks => {
            if (prevActiveTasks.includes(index)) {
                return prevActiveTasks.filter(taskIndex => taskIndex !== index);
            } else {
                return [...prevActiveTasks, index];
            }
        });
    }

    return <>
        <div className={styles.AllTasksPage}>
            <h1>Ваши задачи:</h1>
            {tasks.map((task, index) => (
                <TaskString
                    key={index}
                    title={(index+1) + '. ' + task.title}
                    description={task.description}
                    active={activeTask.includes(index)}
                    onClick={() => handleTaskClick(index)}
                />
            ))}
        </div>
    </>
}