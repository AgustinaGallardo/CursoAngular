import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AleatorioComponent } from './aleatorio/aleatorio.component';
import { ColoresComponent } from './colores/colores.component';
import { SaludoComponent } from './saludo/saludo.component';

@NgModule({
  declarations: [
    AppComponent,
    AleatorioComponent,
    ColoresComponent,
    SaludoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
