import { Component } from '@angular/core';
import { Libro } from './common/types';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//CLASE DEL COMPONENTE
export class AppComponent {
  title = 'Aca desde componente.TS';

  saludo = "Hola..//(De la clase componente)";

 
  miVar2 = 0;
  unArray = [];
  miLibro: Libro;
  misLibros: Libro[];

  constructor(){

   

    this.miLibro = {
      id: 1,
      titulo: "el señor de los anillos"
          
    }

    this.misLibros = [{
      id:1,
      titulo : ""
       }] 

  }
}
