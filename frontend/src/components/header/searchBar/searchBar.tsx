import "./searchBar.css"

export default function SearchBar(){
    return <form id ="search-form">

        <div id="search-wrapper">
            <input
                type="search"
                id="search-bar"
                name="name"
                placeholder="Search..."
            />
            <button type="submit" className="search-icon">
                <img src="./loupe.png" alt="Submit" width={16} height={16}/>
            </button>
        </div>

    </form>
}