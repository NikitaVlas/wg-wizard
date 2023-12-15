import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {

    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                </Routes>
            </Layout>
        </>
    )
}

export default App
