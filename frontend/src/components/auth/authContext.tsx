import { createContext, useContext, useState } from "react";

type User = {
    username: string
    balance: number
    role: string
} | null;

type Token = string | null;

interface IAuthProvider {
    user: User,
    token: Token,

    set_user?: React.Dispatch<React.SetStateAction<User>>,
    set_token?: React.Dispatch<React.SetStateAction<Token>>
};

const defaultContext: IAuthProvider = {
    user: null,
    token: null
};

export const AuthContext = createContext(defaultContext)

export const useAuth = () : IAuthProvider  => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children} : {children: React.ReactNode}) => {
    const [user, set_user] = useState<User>(defaultContext.user);
    const [token, set_token] = useState<Token>(defaultContext.token);
    
    return <AuthContext.Provider value={{user, set_user, token, set_token} satisfies IAuthProvider}>
        {children}
    </AuthContext.Provider>
}