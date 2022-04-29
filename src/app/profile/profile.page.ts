import { Component, OnInit } from '@angular/core';
import { Services } from '../services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

 setProfile;
 username:any
 getrepos;



  constructor(private _services:Services ) { 
    
    this._services.getProfile('').subscribe(profile => {
      
    
      
      this.setProfile = profile
      console.log(this.setProfile)
    })
    //Este bloque de codigo igual se suscribe pero por medio de la funcion getRepos()
    // igual importada de Services, pero solo trae la informacion de las repos publicas
    // que tiene en este caso this.userName
    this._services.getRepos('').subscribe(repos => {
      this.getrepos = repos
      console.log(repos)
    })
  }
  findProfile(){

      
    this._services.updateUsername(this.username);
  }

  ngOnInit() {
  }

  
}

