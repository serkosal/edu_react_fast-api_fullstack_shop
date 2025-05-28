import { createContext } from "react";

export type Roles = 'Unauth' | 'Standart' | 'Admin' | 'Banned';

export interface IAuthContext {
    session_token?: string;
    username?: string;
    role: Roles;
};

export const defaultContext: IAuthContext = {
    session_token: "test",
    username: "undefined",
    role: 'Unauth'
};

export const AuthContext = createContext(defaultContext)