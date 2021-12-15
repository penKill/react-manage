import React, {Component, Suspense} from 'react';
import {router} from '../router'

import {Routes, Route} from 'react-router-dom'
// 讲所有的路由信息渲染到app容器中
export default class View extends Component {
    render() {
        return (
            <>
                <Suspense fallback={<></>}>
                    <Routes>
                        {
                            router.map(r => {
                                return <Route path={r.path} key={r.id} element={r.component}/>
                            })
                        }
                    </Routes>
                </Suspense>

            </>
        );
    }
}

