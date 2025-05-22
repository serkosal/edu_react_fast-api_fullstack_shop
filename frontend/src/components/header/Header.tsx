import SearchBar from "./searchBar/searchBar"

import "./header.css"

export default function Header(){
    return <header>
        <img src='./pc-store_logo.png' width="64" height="64"></img>
        PC STORE
        <SearchBar/>
        <img src='./shopping_cart.png' width="64" height="64"></img>

    </header>
}
