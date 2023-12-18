import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHatWizard} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";
import {checkIsAuth, logout} from "../../redux/features/auth/authSlice";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";


const Navbar = () => {
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        toast('You are logged out')
    }
    return (
        <div className="d-flex justify-content-between">
            <div>
                <FontAwesomeIcon icon={faHatWizard} />
                <span className="ms-4">WG Wizard</span>
            </div>
            {isAuth && <div className="">
                <ul className="d-flex flex-row">
                    <li>
                        <NavLink
                            to={'/todolist'}
                            href="/"
                            className="text-decoration-none"
                        >
                            Todolist
                        </NavLink>
                    </li>
                    <li className="ms-4">
                        <NavLink
                            to={'/calendar'}
                            href="/"
                            className="text-decoration-none"
                        >
                            Calendar
                        </NavLink>
                    </li>
                </ul>
            </div>}
            <div>
                {isAuth ?<Link onClick={logoutHandler} to={"/login"}>Logout</Link> : <Link to={"/login"}>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar