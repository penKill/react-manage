import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {LaptopOutlined, NotificationOutlined} from '@ant-design/icons';
import {IRouter, router} from '../../router'
import {Link} from 'react-router-dom';

const {SubMenu} = Menu;
const {Sider} = Layout;

class LeftMenu extends Component {
    generateMenu = (routerArr?: IRouter[]) => {
        return (
            <>
                {
                    routerArr?.map(r => {
                        if (r.children) {
                            return <SubMenu key={r.id} icon={<LaptopOutlined/>} title={r.title}>
                                {this.generateMenu(r.children)}
                            </SubMenu>
                        } else {
                            return <Menu.Item key={r.id}>{r.title}
                                <Link to={r.path}/>
                            </Menu.Item>
                        }
                    })
                }

            </>


        )
    }

    render() {
        return (
            <Sider width={200} className="site-layout-background">
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0}}
                >
                    {
                        this.generateMenu(router)
                    }
                    {/*<SubMenu key="sub2" icon={<LaptopOutlined/>} title="subnav 2">*/}
                    {/*    <Menu.Item key="5">option5</Menu.Item>*/}
                    {/*    <Menu.Item key="6">option6</Menu.Item>*/}
                    {/*    <Menu.Item key="7">option7</Menu.Item>*/}
                    {/*    <Menu.Item key="8">option8</Menu.Item>*/}
                    {/*</SubMenu>*/}
                    {/*<SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">*/}
                    {/*    <Menu.Item key="9">option9</Menu.Item>*/}
                    {/*    <Menu.Item key="10">option10</Menu.Item>*/}
                    {/*    <Menu.Item key="11">option11</Menu.Item>*/}
                    {/*    <Menu.Item key="12">option12</Menu.Item>*/}
                    {/*</SubMenu>*/}
                </Menu>
            </Sider>
        );
    }
}

export default LeftMenu;
