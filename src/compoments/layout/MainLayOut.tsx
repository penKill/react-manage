import React, {Component} from 'react';
import {Layout, Breadcrumb} from 'antd';
import LeftMenu from './LeftMenu'
import HeaderMenu from './HeaderMenu'

const {Content} = Layout;

/**
 * 总的页面布局
 */
class MainLayOut extends Component {
    render() {
        return (
            <Layout>
                <HeaderMenu/>
                <Layout>
                    {/*左边的导航栏*/}
                    <LeftMenu/>
                    <Layout style={{padding: '0 24px 24px'}}>
                        <Breadcrumb style={{margin: '16px 0'}}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 124,
                                margin: 0,
                                minHeight: 180,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default MainLayOut;
