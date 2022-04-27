import { Component } from '@angular/core';

import { Services } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  getdata;

  constructor(private _services: Services) {

    this._services.getData('').subscribe(data => {
      this.getdata = data 
      console.log(data)

      
      
    })
  }

}
