import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
// import registerUser from "../redux/features/auth/authSlice";
import {toast} from 'react-toastify'
import {checkIsAuth, registerUser} from "../redux/features/auth/authSlice";

const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { status } = useSelector((state) => state.auth)
    const isAuth = useSelector(checkIsAuth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (status) {
            toast(status)
        }
        if (isAuth) navigate('/')
    }, [status, isAuth, navigate])

    const handleSubmit = () => {
        try {
            dispatch(registerUser({ username, password }))
            setPassword('')
            setUsername('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mt-5">
            <div className="card p-4" style={{ maxWidth: "400px", margin: "auto" }}>
                <form
                    onSubmit={e => e.preventDefault()}
                    className="text-center"
                >
                    <div className="mt-4">
                        <h1>Registration</h1>

                        <div className="form-group mt-3">
                            <label htmlFor="username">User name</label>
                            <input
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                id="username"
                                placeholder="User name"
                                className="form-control mt-2"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                id="password"
                                placeholder="Password"
                                className="form-control mt-2"
                            />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                        <button type="submit" className="btn btn-primary mr-2 me-2" onClick={handleSubmit}>Confirm</button>
                        <Link to={"/login"} className="btn btn-secondary ms-2">Already registered?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;