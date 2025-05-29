import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export function SignInForm() {

    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const sign_in_on_change = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setInput(prev => ({
            ...prev,
            [name]: value,
        }));
    }

    return <form onSubmit={(ev: FormEvent<HTMLFormElement>) => sign_in_on_submit(ev, input)}>
        <p>Sign in</p>

        <label htmlFor="sign_in_username">Username:</label> 
        <input 
            type="text" id="sign_in_username" 
            name="username" 
            onChange={sign_in_on_change}
        /> <br/>

        <label htmlFor="sign_in_password">Password: </label> 
        <input 
            type="password" 
            id="sign_in_password" 
            name="password" 
            onChange={sign_in_on_change}
        /> <br/>

        <button type="submit">Sign In</button>

        <p>Don't have an account? <a>Sign up</a></p>
    </form>

}


interface ISignUpInput {
    username: string,
    password: string
}

async function sign_in_on_submit (
    event: FormEvent<HTMLFormElement>,
    input: ISignUpInput
) {
    event.preventDefault();

    if (input.username !== "" && input.password !== "") {

        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(input),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Logged in! Token: ' + data.access_token);
        } else {
            alert('Login failed: ' + data.detail);
        }
    }
    else {
        alert("please provide a valid input");
    }
}
