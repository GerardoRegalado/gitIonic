import { Component, OnInit } from '@angular/core';
import { Services } from '../services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

 setProfile;



  constructor(private _services:Services ) { 
    
    this._services.getProfile('').subscribe(profile => {
      
    
      
      this.setProfile = profile
      console.log(this.setProfile)
    })
  }

  ngOnInit() {
  }

}
