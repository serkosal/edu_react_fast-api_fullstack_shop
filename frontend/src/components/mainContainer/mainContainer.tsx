import Categories   from "./categories/Categories"
import Main         from "./main/main"
import Filters      from "./filters/Filters"

import "./MainContainer.css"

export default function MainContainer()
{
    return <div className='MainContainer'>
        <Categories/>
        <Main/>
        <Filters/>
    </div>
}