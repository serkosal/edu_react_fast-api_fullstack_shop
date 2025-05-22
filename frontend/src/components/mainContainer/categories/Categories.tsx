import React, { useState } from "react";

import "./categories.css"

export default function Categories(){

    const [category, setCategory] = useState("All");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    };

    const variants = [];
    for (let variant of [
        {id: "All-cat",         value: "All", checked: category == "All"},
        {id: "CPU-cat",         value: "CPU"},
        {id: "GPU-cat",         value: "GPU"},
        {id: "Motherboard-cat", value: "Motherboard"},
        {id: "PSU-cat",         value: "PSU"},
        {id: "RAM-cat",         value: "RAM"},
        {id: "Data-cat",        value: "Data"},
    ]) {
        variants.push(
            <div>
                <input 
                    type="radio" 
                    id={variant.id}
                    name="category" 
                    value={variant.value} 
                    checked={variant.checked}
                    onChange={handleChange}
                />
                <label htmlFor={variant.id}>{variant.value}</label>
            </div>
        )
    }

    return <div className="categories">
        <fieldset>
            <legend>Select a product category:</legend>

            {variants}
        </fieldset>

    </div>
}
