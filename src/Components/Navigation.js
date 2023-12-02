import '../Style/Nav.css';
import { Link } from "react-router-dom";
let Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Bella
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item or_link">
                                <Link className="nav-link" to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item or_link">
                                <Link className="nav-link" to={'/fav'}>Favorite</Link>
                            </li>
                            <li className="nav-item or_link">
                                <Link className="nav-link" to={'/cart'}>Cart</Link>
                            </li>
                            <li className="nav-item or_link">
                                <Link className="nav-link" to={'/order'}>Order</Link>
                            </li>

                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item or_link">
                                <a className="nav-link " href="#">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link basket" href="#"><i className="bi bi-bag-dash"></i> </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav;