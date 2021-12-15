import axios from 'axios';

// 创建axios实例，并加入拦截器
// axios 实例
const instance = axios.create({
    timeout: 10000,
    responseType: 'json'
});


// 添加请求拦截器
instance.interceptors.request.use(
    request => {

        return request;
    },
    error => {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
instance.interceptors.response.use(
    response => {
        //根据相应错误代码做全局页面跳转

        return response;
    },
    error => {
        const response = error.response;

        // 根据返回的http状态码做不同的处理
        switch (response?.status) {
            case 401:
                // token失效
                break;
            case 403:
                // 没有权限
                break;
            case 500:
                // 服务端错误
                break;
            case 503:
                // 服务端错误
                break;
            default:
                break;
        }


        // eslint-disable-next-line
        return Promise.reject(response || {message: error.message});
    }
);

export default instance;
