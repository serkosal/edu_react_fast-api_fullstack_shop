import SearchBar from "./searchBar/searchBar"
import { AuthComp } from "../auth/ProtectedComponent"

import { AuthContext,  } from "../auth/authContext"
import { useContext } from "react"

import "./header.css"

export default function Header(){

    const auth_context = useContext(AuthContext);

    return <header>
        <img src='./pc-store_logo.png' width="64" height="64"></img>
        PC STORE
        <SearchBar/>

        <AuthComp 
            is_authenticated={auth_context.session_token !== undefined}>

            <p>{auth_context.username}</p>

        </AuthComp>
        
        <img src='./shopping_cart.png' width="64" height="64"></img>

    </header>
}
