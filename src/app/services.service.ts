
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})


export class Services {
  
    
  private userName:string;
  private clientID= '0c7b23c3d2d30289013e'
  private clientSecret= 'b2aee2a509384f0be5864a06f90759850af0cf1b'
  
  constructor( private _http: HttpClient) {

    this.userName = 'GerardoRegalado'
  }
  
  getData<T>(url : string){
    const headers = {
    "Authorization" : "Token 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"
  }

    url = `https://api.github.com/users`
    return this._http.get<T[]>(url, {
      "headers" : headers
    })
      
  }

  // getData(){
    
    // const Headers = {
    //   "Authorization" : ' token: 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'
    // }
    //  const response =  fetch(`https://api.github.com/users`, {
    //    "method": "GET",
    //    Headers: HttpHeaders
    //  })
    // return this._http.get(`https://api.github.com/users`) 
  

    getProfile(){
      
      return this._http.get(`https://api.github.com/users/`+ this.userName +
      "?client_id=" + this.clientID + 
      "&client_secret="+ this.clientSecret)
  
    }
}
