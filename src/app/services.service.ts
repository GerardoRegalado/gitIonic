import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'
})
export class Services {

    token = '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'
  constructor( public _http: HttpClient) { }

  getData<T>(url : string){
    
    url = `https://api.github.com/users`
    return this._http.get<T[]>(url)
  }
}
