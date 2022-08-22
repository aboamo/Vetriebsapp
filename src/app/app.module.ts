import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';
import { SideBarRightComponent } from './side-bar-right/side-bar-right.component';
import { SideBarLeftComponent } from './side-bar-left/side-bar-left.component';
import { MainViewComponent } from './main-view/main-view.component';

@NgModule({
  declarations: [					
    AppComponent,
      HeaderComponent,
      MapComponent,
      SideBarRightComponent,
      SideBarLeftComponent,
      MainViewComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
