import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import { TheBigTreeComponent } from './the-big-tree/the-big-tree.component';
import { ImgMapComponent } from './img-map/img-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent,
    TheBigTreeComponent,
    ImgMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
