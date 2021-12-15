import React, {Component, createRef, RefObject} from "react";
import {Form, FormInstance, Checkbox, Button, Input, Space} from "antd";
import '../static/css/login.css'
import axios from "axios";

export default class Login extends Component<any, any> {
    fromRef: RefObject<FormInstance>


    constructor(props: any, context: any) {
        super(props, context);
        this.fromRef = createRef<FormInstance>()
    }

    login = (form: any) => {
        axios.post('/login', {username: form.username, password: form.password}).then(
            response => {
                console.log('成功')

                console.log(response)
            },
            error => {
                console.log('失败')

                console.log(error)
            }
        )
    }

    render() {
        return (
            <div id="login">
                <Form
                    name="login"
                    id="login-form"
                    labelCol={{span: 4}}
                    wrapperCol={{span: 16}}
                    initialValues={{remember: true}}
                    onFinish={this.login}
                    autoComplete="off"
                    ref={this.fromRef}
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{required: true, message: '请输入用户名', type: "string"}]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{required: true, message: '请输入密码', type: "string"}]}
                    >
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 4, span: 16}}>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 4, span: 16}}>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                            <Button type="primary" htmlType="reset">
                                重置
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
