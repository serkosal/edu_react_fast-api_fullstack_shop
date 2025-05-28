import { Link } from "react-router-dom"


export interface IProtectedComponent {
    is_authenticated: boolean
    children: React.ReactNode
    fallback?: React.ReactNode
}

function DefaultLoginLink()
{
    return <Link to={"/auth"}>Sign In</Link>;
}

export function AuthComp({is_authenticated, children, fallback = <DefaultLoginLink/>}: IProtectedComponent) {
    return <> {
        is_authenticated ? 
        children : fallback
    }</>
}