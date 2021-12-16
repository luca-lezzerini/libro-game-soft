import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuoriDelCastelloComponent } from './fuori-del-castello/fuori-del-castello.component';
import { DentroCastelloComponent } from './dentro-castello/dentro-castello.component';
import { BoscoComponent } from './bosco/bosco.component';
import { CavernaComponent } from './caverna/caverna.component';

@NgModule({
  declarations: [
    AppComponent,
    FuoriDelCastelloComponent,
    DentroCastelloComponent,
    BoscoComponent,
    CavernaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
