import styles from './styles/TaskString.module.css';
import React from "react";
import arrow from '../images/arrow.svg'

interface TaskStringProps {
    title: string;
    description: string;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
    active: boolean;
}

export function TaskString({title, description, onClick, active}: TaskStringProps) {
    return <>

        <div className={styles.TaskString_form}>
            <input type={"checkbox"}/>
            <div className={`${styles.TaskString_div} ${active ? styles.active : ''}`} onClick={onClick}>

                <div className={styles.TaskString_title}>
                    <span>{title}</span>
                    <img src={arrow} alt={"icon_arrow"}/>
                </div>
                <div className={styles.TaskString_description}>
                    <span>{description}</span>
                </div>


            </div>
        </div>


        {/*<div className={styles.TaskString_title}>*/
        }
        {/*<span>{title}</span>*/
        }
        {/*    <img src={arrow} alt={"icon_arrow"}/>*/
        }

        {/*    */
        }
        {/*</div>*/
        }


    </>
}