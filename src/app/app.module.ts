import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { routing , appRoutingProviders} from './app-routing.module'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// para utilizar los status de http se tiene que importar HttpClientModule, posteriormente
// es necesario colocar todas las importaciones en el apartado imports
import { HttpClientModule } from '@angular/common/http'
import { HomePage } from './home/home.page';
import { ProfilePage } from './profile/profile.page';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    routing
    
   
  ],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy,
    
 
  },appRoutingProviders],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
