import styles from '../App.module.css'
import {Link, NavLink, useNavigate} from "react-router-dom";

export function Header() {
    const navigate = useNavigate();

    const activeStyle = {
        color: 'black',
        border: 'solid 2px black',
    }

    const loginHandleClick = () => {
        window.location.assign('http://localhost:3000/login');
    }

    const registrationHandleClick = () => {
        window.location.assign('http://localhost:3000/registration');
    }

    const logoutHandleClick = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <div className={styles.header}>
            <div className={styles.header_logo}>
                <img src={'https://www.reshot.com/preview-assets/icons/JHMANZG7CY/ice-beer-JHMANZG7CY.svg'} alt="logo"/>
                <NavLink
                    to={'/'}>
                    APOPA PROJECT
                </NavLink>
            </div>
            <div className={styles.navbar}>
                <NavLink
                    className={styles.nav_link}
                    to={'/tasks'}
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                    Мои задачи
                </NavLink>

                <NavLink
                    className={styles.nav_link}
                    to='/new'
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                    Создать задачу
                </NavLink>

                <NavLink
                    className={styles.nav_link}
                    to="/info"
                    style={({isActive}) => isActive ? activeStyle : undefined}>
                    Информация
                </NavLink>

            </div>

            {
                localStorage.getItem("token") !== null
                    ? <div className={styles.header_navigation}>
                        <span>{localStorage.getItem("name")}</span>
                        <button onClick={logoutHandleClick}>LOG OUT</button>
                    </div>
                    : <div className={styles.header_navigation}>
                        <button onClick={registrationHandleClick}>SIGN UP</button>
                        <button onClick={loginHandleClick}>SIGN IN</button>
                    </div>
            }
        </div>
    );
}
