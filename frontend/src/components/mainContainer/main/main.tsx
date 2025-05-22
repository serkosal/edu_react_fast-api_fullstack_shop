import { useState } from 'react'
import ProductCard from './product_card/product_card'

import "./main.css"

export default function Main(){

    const [count, setCount] = useState(0);

    const elements = [];
    for (let i = 0; i < 7; i++) {
        elements.push(<ProductCard/>);
    }

    return <main>

        {elements}

        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>

    </main>
}
