import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {checkIsAuth, loginUser} from "../redux/features/auth/authSlice.js";
import {toast} from "react-toastify";

const LoginPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { status } = useSelector((state) => state.auth)
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (status) toast(status)
        if (isAuth) navigate('/')
    }, [status, isAuth, navigate])

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ username, password }))
        } catch (error) {
            console.log(error)
        }
    }

    return  (
        <div className="container mt-5">
            <div className="card p-4" style={{ maxWidth: "400px", margin: "auto" }}>
                <form
                    onSubmit={e => e.preventDefault()}
                    className="text-center"
                >
                    <div className="mt-4">
                        <h1>Authorization</h1>

                        <div className="form-group mt-3">
                            <label htmlFor="username">User name</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="User name"
                                className="form-control mt-2"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="form-control mt-2"
                            />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary mr-2 me-2">Login</button>
                        <Link to={"/register"} className="btn btn-secondary ms-2">No account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;