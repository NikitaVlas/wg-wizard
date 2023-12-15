import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx";
import TodolistPage from "./pages/TodolistPage.jsx";

function App() {

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
            </Layout>
        </>
    )
}

export default App
