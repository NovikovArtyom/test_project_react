import styles from './AddTaskPage.module.css'
import {SubmitButton} from "../UI-components/SubmitButton";
import {InputText} from "../UI-components/InputText";
import {LayoutTitle} from "../UI-components/LayoutTitle";

export function AddTaskPage() {
    return (
        <div className={styles.AddTaskPage}>
            <form className={styles.AddTaskPage_form}>
                <LayoutTitle text={'Добавить задачу'} />
                <InputText text={"Наименование задачи"} />
                <InputText text={"Описание задачи"} />
                <SubmitButton text={"Сохранить"}/>
            </form>
        </div>
    );
}
