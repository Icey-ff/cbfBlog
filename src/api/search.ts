import { HttpResponse } from "@/model/HttpResponse";
import service from "@/utils/http";
import basePath from 'base'

export default class SearchService {

  static async getSearchReason(id: string): Promise<HttpResponse> {
    const res: Promise<HttpResponse> = service(basePath + '/getSearchReason', {
      method: 'get',
      responseType: 'json',
      params: {
        id: id
      }
    })
    return res;
  }

}