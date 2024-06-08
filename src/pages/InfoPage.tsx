import styles from './styles/InfoPage.module.css'

export function InfoPage() {
    return (
        <div className={styles.InfoPage}>
            <form className={styles.InfoPage_form}>
                <p>Ну давай разберем по частям, тобою написанное )) Складывается впечатление что ты реально контуженный , обиженный жизнью имбицил )) Могу тебе и в глаза сказать, готов приехать послушать?) Вся та хуйня тобою написанное это простое пиздабольство , рембо ты комнатный)) от того что ты много написал, жизнь твоя лучше не станет)) пиздеть не мешки ворочить, много вас таких по весне оттаяло )) Про таких как ты говорят: Мама не хотела, папа не старался) Вникай в моё послание тебе постарайся проанализировать и сделать выводы для себя)</p>
            </form>
            <div className={styles.InfoPage_memes}>
                <img src={"https://i.pinimg.com/236x/75/1d/93/751d935e0ccc9d7eb40d775da3c21f29.jpg"}/>
                <img src={"https://i.pinimg.com/236x/e7/ed/cc/e7edcc878fd5bce21824595f71ca6091.jpg"}/>
                <img src={"https://i.pinimg.com/236x/e6/fc/4d/e6fc4d605cdb33f1d7a1c2f3fa686fd6.jpg"}/>
            </div>
        </div>
    );
}
