import SearchBar from "./searchBar/searchBar"
import { AuthComp } from "../auth/ProtectedComponent"

import { AuthContext } from "../auth/authContext"
import { useContext } from "react"

import "./header.css"

export default function Header(){

    const auth_context = useContext(AuthContext);

    return <header>
        <img src='./pc-store_logo.png' width="64" height="64"></img>
        PC STORE
        <SearchBar/>

        <AuthComp>

            <p>{auth_context.user?.username}</p>

        </AuthComp>
        
        <img src='./shopping_cart.png' width="64" height="64"></img>

    </header>
}
