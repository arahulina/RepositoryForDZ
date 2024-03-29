import React from "react"
import {Link} from "react-router-dom";


class Main extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">My Site </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link"  to="/"> Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/about"> About </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/phone"> My Phone </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/tags"> Tags </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link"  to="/auth"> Auth </Link>
                            </li>
                        </ul>
                    </div>
                </nav>

            </>
        )
    }
}

export default Main;