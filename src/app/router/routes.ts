
import { MAIN_ROUTE,AUTH_ROUTE, REGISTRATION_ROUTE} from "./consts";
import {Main} from "../../pages/main";
import {Auth} from "../../pages/auth";
export const authRoutes = [

]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },


]
