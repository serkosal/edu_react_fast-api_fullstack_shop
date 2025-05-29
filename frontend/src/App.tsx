import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header"
import MainContainer from "./components/mainContainer/mainContainer"
import Footer from "./components/footer/footer"
import {SignInForm, SignUpForm} from './components/auth/authForm';

import "./main.css"

function App() {

    return <BrowserRouter>

        <Header/>
        
        <Routes>
            <Route path='/' element={<MainContainer/>}/>
            <Route path='/sign_in' element={<SignInForm />} />
            <Route path='/sign_up' element={<SignUpForm />} />
        </Routes>
        
        <Footer/>
        
    </BrowserRouter>
        

}

export default App
