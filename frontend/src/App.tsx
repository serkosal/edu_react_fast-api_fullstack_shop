import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header"
import MainContainer from "./components/mainContainer/mainContainer"
import Footer from "./components/footer/footer"
import AuthForm from './components/auth/auth';

import "./main.css"

function App() {
    

    return (

        <>
            <Header/>
            <BrowserRouter>
                
                <Routes>
                    <Route path='/' element={<MainContainer/>}/>
                    <Route path='/auth' element={<AuthForm />} />
                </Routes>
            
            </BrowserRouter>
            <Footer/>
        </>
    )
}

export default App
