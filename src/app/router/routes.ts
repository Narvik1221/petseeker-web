
import { MAIN_ROUTE,AUTH_ROUTE, REGISTRATION_ROUTE} from "./consts";
import {Main} from "../../pages/Main";
import {Login} from "../../pages/Login";
export const authRoutes = [

]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: AUTH_ROUTE,
        Component: Login
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Login
    },


]
