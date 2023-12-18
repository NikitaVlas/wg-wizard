import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import TodolistPage from "./pages/TodolistPage.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getMe} from "./redux/features/auth/authSlice";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, []);

    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/calendar" element={<CalendarPage/>}/>
                    <Route path="/todolist" element={<TodolistPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                </Routes>

                <ToastContainer position="bottom-right"/>
            </Layout>
        </>
    )
}

export default App
