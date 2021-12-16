import {Result, Button} from 'antd';
import React, {Component} from 'react';
import Home from './index/Home'
import {} from 'react-router-dom'

class Page404 extends Component {
    returnHome = () => {
    }

    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="抱歉,让你看到我的404页面呢"
                extra={<Button onClick={this.returnHome} type="primary">返回主页</Button>}
            />
        );
    }
}

export default Page404;
