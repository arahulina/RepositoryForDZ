import GoogleMap from "../components/googleMap/GoogleMap";


function ContactPage(){

    return(
        <>
            <div className="container-fluid">
                <div>
                    <p>Гаряча лінія готова допомогти Вам з 08.00 до 20.00, без вихідних: </p>
                    <ul>
                        <li>за номером +380...</li>
                        <li>на email ...</li>
                        <li>в direct Instagram ...</li>
                    </ul>
                </div>
                <hr />
                <div>
                    Приєднуйтесь до нас в соціальних мережах:
                    <ul>
                        <li><a href=""><img src="" alt="Instagram"/></a></li>
                        <li><a href=""><img src="" alt="Telegram"/></a></li>
                    </ul>
                </div>
                <hr />
                <div>
                    <p>Завітайте до нашого шоуруму в м.Миколаєві:</p>
                    <p>м.Миколаїв, вулиця 12-а Поздовжня, 51 (кут вулиці Космонавтів)</p>
                    <p>Бізнес-центр Европа, 4 поверх, офіс 408</p>
                    <p>Пн - Сб <span>10:00 - 17:00</span></p>
                    <p>Нд <span>вихідний</span></p>
                    <div>
                        <GoogleMap></GoogleMap>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ContactPage;