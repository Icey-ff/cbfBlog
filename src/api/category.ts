import { HttpResponse } from "@/model/HttpResponse";
import service from "@/utils/http";
import basePath from './base';

export default class CategoriesService {
  static async categories(): Promise<HttpResponse> {
    console.log(basePath);
    const res: Promise<HttpResponse> = service(basePath + '/categories', {
      method: 'get',
      responseType: 'json',
    })
    return res;
  }

  static async getCategoriesPage(id: string): Promise<HttpResponse> {
    console.log(id);
    const res: Promise<HttpResponse> = service(basePath + '/getCategoriesPage', {
      method: 'get',
      responseType: 'json',
      params: {
        id: id
      }
    })
    return res;
  }

}