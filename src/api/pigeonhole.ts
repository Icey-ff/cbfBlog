import { HttpResponse } from "@/model/HttpResponse";
import service from "@/utils/http";
import basePath from './base';

export default class PigeonholeService {

  static async pigeonhole(): Promise<HttpResponse> {
    const res: Promise<HttpResponse> = service(basePath + '/pigeonhole', {
      method: 'get',
      responseType: 'json',
    })
    return res;
  }

}