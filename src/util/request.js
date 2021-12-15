import axios from 'axios';
import qs from 'qs';
import {
    delCookie,
    getCookie,
    setCookie
} from "./cookie";
//设置超时时间
axios.defaults.timeout = 15000;
//设置全局的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

axios.defaults.baseURL = process.env.VUE_APP_BASEURL;

const currContentType = {
    urlencoded: "application/x-www-form-urlencoded;charset=utf-8",
    fromData: "ipart/form-data;charset=utf-8",
    json: "application/json;charset=utf-8",
    xml: "text/xml;charset=utf-8",
    form: "multipart/form-data;charset=utf-8"
};

axios.interceptors.request.use(
    config => {
        let contentType;
        let token = getCookie("apToken")
        if (config.contentType) {
            contentType = currContentType[config.contentType]

        } else {
            contentType = currContentType["urlencoded"]
        }


        if (config.contentType == "json") {
            if (config.params) {
                config.params.token = token
            } else {
                let params = {
                    token: token
                }
                config.params = params
            }
            config.data = JSON.stringify(config.data)

        } else if (config.contentType == "form") {

            config.data.append('token', token)

        } else {


            if (config.method == "get") {
                if (config.params) {
                    config.params.token = token
                } else {
                    let params = {
                        token: token
                    }
                    config.params = params
                }
            } else {
                if (config.data) {
                    config.data.token = token;
                }
            }
            config.data = qs.stringify(config.data);
        }


        config.headers = {
            'Content-Type': contentType,
            // 'TK_REQUEST_SYS_CODE': 'HISXL',
            // 'TK_REQUEST_AUTH_CODE': 'HISXL-001',
            // 'Accept': 'application/json',
            // 'Accept-Charset': 'utf-8',
            // 'Content-Type': 'application/json;charset=UTF-8',
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//添加响应之后拦截器
axios.interceptors.response.use(function (response) {
    // //对响应数据做些事
    // if (response.status && response.status != 200) {
    //     return Promise.reject()
    // }
    // let code = response.data.code;
    // if (code == 200 || code == 2000) {
    //     return response;
    // } else if (code == 2003) {
    //     if (response.config.showError) {
    //         Message.error(response.data.msg);
    //     }
    //     setCookie('apToken', '')
    //     router.push({
    //         path: "/login"
    //     });
    // } else {
    //     if (response.config.showError) {
    //         if (response.data && response.data.msg) {
    //             Message.error(response.data.msg);
    //         } else {
    //             Message.error("服务器错误");
    //         }
    //
    //     }
    // }
    return response;
}, function (error) {
    //请求错误时做些事
    return Promise.reject(error);
});

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}, {
    showError = true,
    contentType = "urlencoded"
} = {}) {
    let config = {
        showError: showError,
        contentType: contentType
    }
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
            ...config
        }).then(response => {
            if (response.data.code == 2000 || response.data.code == 200) {
                return resolve(response.data.data);
            } else {
                if (response) {
                    return reject(response)
                } else {
                    return reject(null)
                }

            }

        }).catch(err => {
            // if (response.data.code == 2021) {
            //     if (config.showError) {
            //         Message.error("无访问权限，请尝试重新登录");
            //     }
            // } else {
            //     if (config.showError) {
            //         Message.error("服务器错误");
            //     }
            // }

            return reject(err)
        })
    })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}, {
    showError = true,
    contentType = "urlencoded"
} = {}) {
    //追加全局参数
    // data.token = getCookie('apToken');
    let config = {
        showError: showError,
        contentType: contentType
    }
    return new Promise((resolve, reject) => {
        axios.post(url, data, config).then(response => {
            if (response.data.code == 2000 || response.data.code == 200) {
                return resolve(response.data.data);
            } else {
                if (response.data) {
                    return reject(response.data)
                } else {
                    return reject(null)
                }
            }
        }).catch(err => {
            if (config.showError) {
                // Message.error("服务器错误");
            }
            return reject(err)
        })
    })
}

export function getResponse(url, data, options) {
    return new Promise((resolve, reject) => {
        get(url, data, options).then(res => {
            return resolve(res)
        }).catch(err => {
            return reject(err)
        })
    })
}

export function postResponse(url, data, options) {
    return new Promise((resolve, reject) => {
        post(url, data, options).then(res => {
            return resolve(res)
        }).catch(err => {
            return reject(err)
        })
    })
}
