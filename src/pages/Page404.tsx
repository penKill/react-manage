import {Result, Button} from 'antd';
import React, {Component} from 'react';

class Page404 extends Component {
    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="抱歉,让你看到我的404页面呢"
                extra={<Button type="primary">返回主页</Button>}
            />
        );
    }
}

export default Page404;
