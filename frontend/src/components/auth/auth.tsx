export default function AuthForm() {

    return <form>
        <p>Sign in</p>

        <label htmlFor="username">Username:</label> <br></br>
        <input type="email" id="username"></input>

        <label htmlFor="login_password">Password: </label> <br></br>
        <input type="password" id="login_password"></input>

        <a>Sign up</a>
    </form>

}