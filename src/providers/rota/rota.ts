import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Track } from '../../model'

@Injectable()
export class RotaProvider {

  public readonly ip_teste = "http://localhost:8180/";
  public readonly BASE_URL = this.ip_teste+"appRotas-1.1";

  constructor(public http: Http) {
    console.log('Hello RotaProvider Provider');
  }

  getTraksDirceu() : Observable<Track[]>{
    return this.http.get(this.BASE_URL+'/track/trackDirceu')
    .map(res => res.json() as Track)
    .catch( error => Observable.throw(error));
  }
  

  getTraksEverton() : Observable<Track[]>{
    return this.http.get(this.BASE_URL+'/track/trackEverton')
    .map(res => res.json() as Track)
    .catch( error => Observable.throw(error));
  }

}
