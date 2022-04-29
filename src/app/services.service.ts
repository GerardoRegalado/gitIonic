
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})


export class Services {
  
    
  //Usuario, el cual cambiara su estado por lo cual se inicializa vacio
  public username:any;

  //Credenciales de autorizacion github
  private clientID= '0c7b23c3d2d30289013e'
  private clientSecret= 'b2aee2a509384f0be5864a06f90759850af0cf1b'
  
  constructor( private _http: HttpClient) {

    this.username = 'GerardoRegalado';
  }

  // Conexion con el servicio y metodo get para traer la informacion de la rest api  
  getData<T>(url : string){
    const headers = {
    "Authorization" : "Token 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"
  }

    url = `https://api.github.com/users`
    return this._http.get<T[]>(url)
      
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
  

    // Conexion con el servidor y metodo get para traer informacion del usuario/perfil
    

    getProfile<T>(url:string){
      
      return this._http.get<T>(`https://api.github.com/users/`+this.username + // variable Username que ira cambiando segun cada usuario
      // Credenciales de autorizacion Github:
      "?client_id=" + this.clientID +         
      "&client_secret="+ this.clientSecret)
  
    }

    
    getRepos<T>(url:string){

      return this._http.get<T>(`https://api.github.com/users/`+this.username + // variable Username que ira cambiando segun cada usuario
      // Credenciales de autorizacion Github:
      "/repos?client_id=" + this.clientID +         
      "&client_secret="+ this.clientSecret)
      

    }
    
    updateUsername(username:any){

      this.username = username
    }

  
}
