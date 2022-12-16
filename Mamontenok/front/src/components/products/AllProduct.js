import {useEffect, useState} from "react";
import {toast} from "react-toastify";

export default function AllProduct(){

    


    const [products, setProducts] = useState([])
    const [user, setUser] = useState({name: "гость", _id: 0}) // По умолчанию у нас гость
    // const [total, setTotal] = useState(null)
    const [page, setPage] = useState(1)
    const [per_page, setPerPage] = useState(10)

    let total = 0 // Формируем запись без стейта поскольку переменная статическая

    const loadProduct = function () {
        // toast.error('?page=' + page + "&per_page=" + per_page)
        fetch('http://localhost:3333/api'
            + '/product?page=' + page + "&per_page=" + per_page  ,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('jwtToken')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(res => {
                // console.log(res)
                if(res.status !==200) {
                    toast.error("Ошибка")
                    return null
                }
                return res.json()
            })
            .then(data => {
                if(data === null) {
                    console.log("Я ничего не делаю")
                    return
                }
                // toast.success("Вы успешно получили объявления")
                console.log(data)
                total = data.total // Всего объявлений

                setProducts(products.concat(data.data))

                console.log(total)
                document.body.onscroll = function () {
                    scrollPos()
                }
            })
            .catch(err=> {
                console.log(err)
                toast.error(err)
            })
    }

    const deleteProduct = function (ev) {
        console.log("Start Del")
        console.log(ev.target.value)
        let id = ev.target.value

        fetch('http://localhost:3333/api' + '/product/' + id,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('jwtToken')
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(res => {
                console.log(res)
                console.log(res.status)
                if(res.status === 204) {
                    toast.success(" Вы успешно удалили запись")
                    loadProduct()
                    return
                }
                toast.error(" Произошла ошибка удаления ")

            })
            .catch(err=> {
                console.log(err)
                toast.error(err)
            })


    }


    useEffect(() => {
        loadProduct()
        if ( localStorage.getItem('user') ){ // Если есть данные по пользователю - восстановить их
            setUser(JSON.parse (localStorage.getItem('user')))
        }
    }, [])



    useEffect(() => {
        loadProduct()
    }, [page])


    const loadMore = function () {
        if (page * per_page > total) {
            toast.info(" Вы достигли дна" + page + " " +  per_page + " " + total)
            return
        }
        setPage(page+1)
    }

    const scrollPos = function() {
        // Нам потребуется знать высоту документа и высоту экрана:
        const height = document.body.offsetHeight
        const screenHeight = window.innerHeight
        // Они могут отличаться: если на странице много контента,
        // высота документа будет больше высоты экрана (отсюда и скролл).

        // Записываем, сколько пикселей пользователь уже проскроллил:
        const scrolled = window.scrollY

        // Обозначим порог, по приближении к которому
        // будем вызывать какое-то действие.
        // В нашем случае — четверть экрана до конца страницы:
        const threshold = height - screenHeight / 4

        // Отслеживаем, где находится низ экрана относительно страницы:
        const position = scrolled + screenHeight
        console.log("Scrolled " + scrolled)
        console.log("Position " + position)
        console.log( "hold " + threshold)

        if (position >= threshold) {
            document.body.onscroll = null
            toast.info("Load More " + page)
            loadMore()
        }
    }


    return (
        <div>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                            <p>{product.title}</p>
                            <p>{product.description}</p>
                            <p>{product.price} грн</p>
                    </li>
                ))}
            </ul>


        </div>
    )
}

// <div> Page {page} Total: {total} </div>
// <div onClick={loadMore}> Загрузить дальше </div>