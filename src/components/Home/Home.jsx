import Catalog from "../Catalog/Catalog";
import style from "./Home.module.css";
import earth from "../../assets/img/earth.png"
import { NavLink } from "react-router-dom";

const Home = () => {


    return (
        <>
            <div className="container">
                <div className={style.intro}>
                    <div className={style.intro_left}>
                        <h1 className={style.intro_title}>Онлайн витрина! Доставка букетов в течение часа!</h1>
                        <p className={style.intro_text}>
                        Заказывайте букеты из этого раздела и мы доставим цветы в течение 1 часа! Успейте, акция доступна в течении 3х дней начиная с 15 апреля!
                        </p>
                        <NavLink className={style.intro_btn} to={"/"}>
                            Выбрать букет сейчас
                        </NavLink>
                    </div>
                    <img src={earth} alt="" className="intro_right" />
                </div>
                <Catalog/>
            </div>
        </>
    )
}

export default Home