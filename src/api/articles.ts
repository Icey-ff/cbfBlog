import { HttpResponse } from "@/model/HttpResponse";
import service from "@/utils/http";
import basePath from './base';
export default class ArticlesService {

  static async getArticleList(): Promise<HttpResponse> {
    // console.log(base.getPath);
    return service(basePath + '/getArticleList', {
      method: 'get',
      responseType: 'json'
    })
    // console.log((await res).data[0] as Articles);
    // return res;
  }
  static async getArticle(id: string | null): Promise<HttpResponse> {
    return service(basePath + '/getArticle', {
      method: 'get',
      responseType: 'json',
      params: {
        id: id
      }
    })
  }

  static async getHotArticles(): Promise<HttpResponse> {
    return service(basePath + '/getHotArticles', {
      method: 'get',
      responseType: 'json',
    })
  }

}