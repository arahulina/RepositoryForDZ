import {useEffect} from "react";
import { toast } from 'react-toastify';

export default function About() {

    const notify = () => toast("Wow so easy!");

    useEffect(() => {
        console.log('use Effect About')
        // document.getElementById("about").classList.add('onLoad')
        // document.getElementById("about").style.transition = 'rotate(360deg)'
    });

    // const animateStyles = useSpring({
    //     from: { opacity: 0 } ,
    //     to: { opacity: 1, background: '#f00'},
    //     leave: { opacity: 0 },
    //     delay: 0
    // })

    return (
        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-white mb-4">Built with Bootstrap 5</h2>
                        <p className="text-white-50">
                            Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now,
                            simply download the template on
                            <a href="https://startbootstrap.com/theme/grayscale/">the preview page.</a>
                            The theme is open source, and you can use it for any purpose, personal or commercial.
                        </p>
                        <button onClick={notify}>Notify!</button>


                    </div>
                </div>
                <img className="img-fluid" src="/assets/img/ipad.png" alt="..."/>
            </div>
        </section>
    )
}