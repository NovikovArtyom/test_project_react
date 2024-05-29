import styles from '../App.module.css'

export function AddTaskPage() {
    return (
        <div className={styles.new_task_container}>
            <form className={styles.new_task_form}>
                <input type={'text'} placeholder={'Наименование задачи'}/>
                <input type={'text'} placeholder={'Описание задачи'}/>
                <button type={'submit'}>Сохранить</button>
            </form>
        </div>
    );
}
