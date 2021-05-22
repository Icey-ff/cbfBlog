import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElLoading, ElMessage } from 'element-plus'
// import qs from "qs"

//定义错误提示函数(状态码)
const showStatus = (status: number) => {
  let message = '';
  switch (status) {
    case 400:
      message = "请求中出现错误代码（400）"
      break
    case 401:
      message = '未授权，请重新登录（401）'
      break
    case 403:
      message = '拒绝访问（403）'
      break
    case 404:
      message = '请求资源不存在（404）'
      break
    case 408:
      message = '请求超时（408）'
      break
    case 500:
      message = '服务器错误（500）'
      break
    case 501:
      message = '服务未实现（501）'
      break
    case 503:
      message = '服务不可用（503）'
      break
    case 504:
      message = '网络超时（504）'
      break
    case 505:
      message = 'http版本不受支持（505）'
      break
    default:
      message = `连接出现错误（${status}）'`
  }
  return `${message},连接失败！`
}




// 创建axios，并复制给service
const service = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    get: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    post: {
      'Content-Type': 'application/json;charset=utf-8'//非简单请求
    }
  },
  // 是否跨域
  // withCredentials: true,
  timeout: 30000,
  transformRequest: [(data => {
    data = JSON.stringify(data)
    return data
  })],
  //验证
  validateStatus() {
    return true
  },
  transformResponse: [(data) => {
    if (typeof data === 'string' && data.startsWith('{')) {
      data = JSON.parse(data)
    }
    return data
  }]
});

//请求过程的处理
let loading: any;
const startLoaing = () => {
  interface Options {
    lock: boolean;
    text: string;
    background: string
  }
  const options: Options = {
    lock: true,
    text: "加载中...",
    background: 'rgba(0,0,0,0.7)'

  }
  loading = ElLoading.service(options);
}
const endLoading = () => {
  loading.close();
}

//请求拦截
service.interceptors.request.use((config: AxiosRequestConfig) => {
  // eslint-disable-next-line prefer-const
  let token: string | null = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  // if (config.method === "post") {
  // config.data = qs.stringify(config.data);
  // console.log(config.data);
  // }
  // console.log(config.method);
  //加载
  startLoaing();
  return config;
}, error => {
  //错误抛到业务代码
  error.data = {}
  error.data.msg = '服务器异常'
  return Promise.resolve(error)
})
//响应拦截
service.interceptors.response.use((response: AxiosResponse<any>) => {
  endLoading();

  const status = response.status;
  let msg = '';
  if (status < 200 || status >= 300) {
    msg = showStatus(status)
    if (typeof response.data === 'string') {
      response.data = { msg }
    } else {
      response.data.msg = msg
    }
  }
  return response;
}, error => {
  //错误提醒
  endLoading();
  if (axios.isCancel(error)) {
    console.log('repeated request:' + error.message)
  } else {
    error.data = {}
    error.data.msg = '请求超时或服务器异常'
    ElMessage.error(error.data.msg)
  }
  return Promise.reject(error);
})

export default service