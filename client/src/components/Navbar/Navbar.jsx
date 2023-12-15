import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHatWizard} from "@fortawesome/free-solid-svg-icons";
import {Link, NavLink} from "react-router-dom";


const Navbar = () => {
    const isAuth = false

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
                {isAuth ?<button>Logout</button> : <Link to={"/login"}>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar