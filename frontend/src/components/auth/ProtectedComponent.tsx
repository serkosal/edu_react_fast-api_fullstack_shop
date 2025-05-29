import { Link } from "react-router-dom"

import { useAuth } from "./authContext"


export interface IProtectedComponent {
    children: React.ReactNode
    fallback?: React.ReactNode
}

function DefaultLoginLink()
{
    return <Link to={"/sign_in"}>Sign In</Link>;
}

export function AuthComp({children, fallback = <DefaultLoginLink/>}: IProtectedComponent) {

    const auth_context = useAuth();

    console.log(auth_context);

    return <> {
        auth_context.token !== null ? 
        children : fallback
    }</>
}