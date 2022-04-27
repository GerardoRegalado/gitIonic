import { Component, OnInit } from '@angular/core';
import { Services } from '../services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  getprofile=[]
  

  constructor(private _services:Services ) { 
    
    this._services.getProfile().subscribe(profile => {
   
      console.log(profile)
    })
  }

  ngOnInit() {
  }

}
