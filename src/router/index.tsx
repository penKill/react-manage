import {ReactNode, lazy, ReactElement} from "react";

import Lee from "../pages/Lee";

const Home = lazy(() => import("../pages/Home"));
const UserDetail = lazy(() => import("../pages/UserDetail"));
const Welcome = lazy(() => import( "../pages/Welcome"))
const Login = lazy(() => import( "../pages/Login"))
const Page404 = lazy(() => import( "../pages/Page404"))

//定义路由的格式信息
interface IRouter {
    //id信息
    id: number
    //路径信息
    path: string
    //标题信息
    title: string
    //是否
    exact?: boolean
    component?: ReactElement
    children?: IRouter[]
}

// 全部的路由信息
export const router: IRouter[] = [
    {
        id: 0,
        path: '/login',
        title: 'login page',
        exact: true,
        component: <Login/>
    },
    {
        id: 1,
        path: '/',
        title: 'index page',
        exact: true,
        component: <Home/>
    },
    {
        id: 3,
        path: '/welcome',
        title: 'Welcome page',
        component: <Welcome/>
    },
    {
        id: 4,
        path: '/lee',
        title: 'Lee page',
        component: <Lee/>
    },
    {
        id: 2,
        path: '/user',
        title: 'user list',
        children: [
            {

                id: 3,
                path: '/user/detail/3',
                title: 'user detail 3 page',
                component: <UserDetail/>
            },
            {

                id: 4,
                path: '/user/detail/4',
                title: 'user detail 4 page',
                component: <UserDetail/>
            }
        ]
    },
    {
        id: 999,
        path: '*',
        title: '404',
        component: <Page404/>
    },
]
