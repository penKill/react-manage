import {ReactNode, lazy, ReactElement} from "react";

import DashBoard from "../pages/DashBoard";

const Home = lazy(() => import("../pages/index/Home"));
const UserDetail = lazy(() => import("../pages/user/UserDetail"));
const Welcome = lazy(() => import( "../pages/Welcome"))
const Login = lazy(() => import( "../pages/Login"))
const Page404 = lazy(() => import( "../pages/Page404"))

//定义路由的格式信息
export interface IRouter {
    //id信息
    id: number
    //路径信息
    path: string
    //标题信息
    title: string
    //是否
    exact?: boolean
    component?: ReactNode
    children?: IRouter[]
}

// 全部需要有权限的路由 随便写的假页面
export const router: IRouter[] = [
    {
        id: 1,
        path: '/dashboard',
        title: '首页',
        exact: true,
        component: <DashBoard/>
    },
    {
        id: 2,
        path: '/home',
        title: '仪表盘2',
        exact: true,
        children: [
            {
                id: 11,
                path: '/welcome',
                title: '仪表盘2',
                exact: true,
                component: <Welcome/>
            },
            {
                id: 12,
                path: '/userdetail',
                title: '仪表盘2',
                exact: true,
                component: <UserDetail/>
            }
        ]
    },
    {
        id: 3,
        path: '/home',
        title: '仪表盘2',
        exact: true,
        component: <Home/>
    },
]
//常用不需权限即可展示的页面 比如登录页面 错误页面等等
export const normal_router: IRouter[] = [
    {
        id: 9999,
        path: '/login',
        title: '登录页',
        component: <Login/>
    },
    {
        id: 9998,
        path: '*',
        title: '404',
        component: <Page404/>
    },
    {
        id: 9997,
        path: '/403',
        title: '403',
        component: <Page404/>
    },
]
