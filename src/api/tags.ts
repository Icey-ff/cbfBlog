import { HttpResponse } from "@/model/HttpResponse";
import service from "@/utils/http";
import basePath from './base';

export default class TagsService {

  static async getTags(): Promise<HttpResponse> {
    // console.log();
    const res: Promise<HttpResponse> = service(basePath + '/getTags', {
      method: 'get',
      responseType: 'json',
    })
    return res;
  }


  static async getTagPage(id: string): Promise<HttpResponse> {
    const res: Promise<HttpResponse> = service(basePath + '/getTagPage', {
      method: 'get',
      responseType: 'json',
      params: {
        id: id
      }
    })
    // console.log((await res).data);
    return res;
  }

}