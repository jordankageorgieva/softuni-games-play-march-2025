import { createContext } from "react";

export const UserContext = createContext({
    _id: '',
    email: '',
    username: '',
    accessToken: '',
    // putLoginActionData is a function, which get authData as input
    putLoginActionData: (authData) => null,
});