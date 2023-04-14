import Catalog from "../Catalog/Catalog";
import style from "./Home.module.css";
import crane from "../../assets/img/crane.png"
import { NavLink } from "react-router-dom";

const Home = () => {


    return (
        <>
            <div className="container">
                <div className={style.intro}>
                    <div className={style.intro_left}>
                        <h1 className={style.intro_title}>СУВАР НА СВЯЗИ!</h1>
                        <p className={style.intro_text}>
                        Построим дом под ключ с последующим благоустройством. Осуществляем ремонт и реконструкции зданий, технадзор и сопровождение объектов, а также проектирование любой сложности. Мы строим будущее, мы строим мечту
                        </p>
                        <NavLink className={style.intro_btn} to={"/"}>
                            Подробнее!
                        </NavLink>
                    </div>
                    <img src={crane} alt="" className="intro_right" />
                </div>
                <Catalog/>
            </div>
        </>
    )
}

export default Home