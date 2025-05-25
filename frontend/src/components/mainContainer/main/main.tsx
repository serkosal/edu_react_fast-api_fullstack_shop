import { useEffect, useState } from 'react'

import ProductCard from './product_card/product_card'
import type {Product} from './product_card/product_card'

import "./main.css"

class Filters {
    onStock = false;

    priceFrom = 0;
    priceTo = +Infinity;

    ratingsFrom = 0;
    ratingTo = +Infinity;
}

type ProductsResponse = {
    products: Product[];
};

export default function Main(){

    const [count, setCount] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);
    const [filters, setFilters] = useState(new Filters());


    useEffect(
        () => {
            fetch("http://192.168.5.6:8000/products", )
                .then(response => response.json() )
                .then((values: ProductsResponse) => {
                    setProducts(values.products); 
                    console.log(values.products)}
                )
                .catch(reason => { setProducts(reason) });
        },
        [filters]
    )

    const elements: React.ReactElement[] = [];

    products.forEach((product, i) => {
        elements.push(<ProductCard {...product} key={i}/>);
    });

    return <main>

        {elements}

        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>

    </main>
}
