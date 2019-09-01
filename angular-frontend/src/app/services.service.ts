import { Injectable } from '@angular/core';
import { environment as env } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class ServicesService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(env.apiUrl + 'items')
      .map(response => {
        const data: any = response;
        return data;
      });
  }

  getItemDetails(id) {
    return this.http.get(env.apiUrl + '/items/' + id)
      .map(response => {
        const data: any = response;
        return data;
      });
  }

  getCategories() {
    return this.http.get(env.apiUrl + '/categories')
      .map(response => {
        const data: any = response;
        return data;
      });
  }

}
