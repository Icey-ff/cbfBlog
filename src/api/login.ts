import { HttpResponse } from "@/model/HttpResponse";
import LoginParams from "@/model/LoginParams";
import service from "@/utils/http";
import basePath from './base'

export default class UserService {
  static async login(params: LoginParams): Promise<HttpResponse> {
    return service(basePath + '/login', {
      method: 'post',
      responseType: 'json',
      data: params

    })
  }
  static async resgister(params: LoginParams): Promise<HttpResponse> {
    return service(basePath + '/resigter', {
      method: 'post',
      responseType: 'json',
      data: params
    })
  }
}


// return service('http://localhost:3000/resigter', {
//       method: 'post',
//       responseType: 'json',
//       params: {
//         ...params
//       }
//     })
