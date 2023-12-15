import React from 'react';
import {Link} from "react-router-dom";

const LoginPage = () => {
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
                                placeholder="User name"
                                className="form-control mt-2"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                className="form-control mt-2"
                            />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center mt-4">
                        <button type="submit" className="btn btn-primary mr-2 me-2">Login</button>
                        <Link to={"/register"} className="btn btn-secondary ms-2">No account?</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;