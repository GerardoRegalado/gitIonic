import { Component } from '@angular/core';

import { Services } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Aqui se guardara la informacion que llegue de las restAPI, 
  // es por eso que se declaran como vacias.

  getdata;
  getrepos;
  getprofile;
  username:any;
  setProfile;
 

  constructor(public _services: Services) {

    // Este bloque de codigo se suscribe por medio de la funcion getData()
    // traida de Services a los servicios de la repo y trae la informacion
    // general del usuario
    this._services.getData('').subscribe(data => {
      this.getdata = data 
      console.log(data)

      
      
    })
    

      
    //Este bloque de codigo igual se suscribe pero por medio de la funcion getRepos()
    // igual importada de Services, pero solo trae la informacion de las repos publicas
    // que tiene en este caso this.userName
    this._services.getRepos('').subscribe(repos => {
      this.getrepos = repos
      console.log(repos)
    })
  

    this._services.getProfile('').subscribe(profile => {
      
    
      
      this.setProfile = profile
      
    })


  
  }
    findProfile(){

      
      this._services.updateUsername(this.username);

     
    }
}
