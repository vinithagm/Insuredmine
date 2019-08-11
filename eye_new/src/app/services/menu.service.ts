import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response,Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { baseURL } from '../shared/baseurl';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private restangular: Restangular,
    private http:Http
  ) { }

  getData(): Observable<any[]> {
    return this.http.get(baseURL).map(res => res.json());
  }

}
