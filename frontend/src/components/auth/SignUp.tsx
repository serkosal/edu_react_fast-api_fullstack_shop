function sign_up_on_change() {

}

function sign_up_on_submit() {

}

export function SignUpForm() {

    return <form onSubmit={sign_up_on_submit} onChange={sign_up_on_change}>
        <p>Sign up</p>

        <label htmlFor="sign_up_username">Username:</label> 
        <input type="text" id="sign_up_username"></input> <br></br>

        <label htmlFor="sign_up_password">Password: </label> 
        <input type="password" id="sign_up_password"></input> <br></br>

        <label htmlFor="sign_up_repeat_password">Repeat password: </label>
        <input type="password" id="sign_up_repeat_password"></input> <br></br>

        <p>Already have an account? <a>Sign in</a></p>
    </form>

}