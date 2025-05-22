import React, { useState } from "react";

import "./categories.css"

interface IRadioButton {
    id: string;
    value: string;
    checked?: boolean;
}

interface IRadioButtonsProps {
    classname?: string;
    legend?: string;

    name: string;
    variants: IRadioButton[];

    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

function RadioButtons({
    classname,
    legend,
    name,
    variants,
    setCategory
} : IRadioButtonsProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    };

    const ret_variants = variants.map((variant) => (
        <div key={variant.id}>
            <input
                type="radio"
                id={variant.id}
                name={name}
                value={variant.value}
                checked={variant.checked}
                onChange={handleChange}
            />
            <label htmlFor={variant.id}>{variant.value}</label>
        </div>
    ));

    return <fieldset className={classname}>
        {legend}

        {ret_variants}
    </fieldset>;
}

export default function Categories(){

    const [category, setCategory] = useState("All");

    const props: IRadioButtonsProps = {
        classname: "categories",
        legend: "Choose category",
        name: "category",
        setCategory: setCategory,
        variants: [
            {id: "All-cat",         value: "All", checked: category == "All"},
            {id: "CPU-cat",         value: "CPU"},
            {id: "GPU-cat",         value: "GPU"},
            {id: "Motherboard-cat", value: "Motherboard"},
            {id: "PSU-cat",         value: "PSU"},
            {id: "RAM-cat",         value: "RAM"},
            {id: "Data-cat",        value: "Data"},
        ]
    };

    return <RadioButtons {...props} />
    
}
