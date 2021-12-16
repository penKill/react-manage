import React, {Component, Suspense} from 'react';
import {router, normal_router} from '../router'
import MainLayOut from './layout/MainLayOut'

import {BrowserRouter as Routes, Switch, Route, Redirect} from 'react-router-dom'
// 讲所有的路由信息渲染到app容器中
export default class View extends Component {
    render() {
        return (
            <>
                {/*懒加载的时候 当组件还没加载出来的时候 显示fallback中的内容*/}
                <Suspense fallback={<></>}>
                    <Routes>
                        {/*相当于做一个判断路由*/}
                        {/*可登陆后才可以访问的页面*/}
                        <Switch>
                            <MainLayOut>
                                {/*遍历所有定义的页面信息到左侧*/}
                                {
                                    router.map(r => {
                                        return <Route path={r.path} exact={r.exact} key={r.id}>{r.component}</Route>
                                    })
                                }
                            </MainLayOut>
                        </Switch>
                        {/*不需登陆即可访问的页面*/}
                        <Switch>
                            <Route>
                                {
                                    normal_router.map(r => {
                                        return <Route path={r.path} exact={r.exact} key={r.id}>{r.component}</Route>
                                    })
                                }
                            </Route>
                        </Switch>
                    </Routes>
                </Suspense>
            </>
        );
    }
}

