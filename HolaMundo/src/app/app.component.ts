import { Component } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//CLASE DEL COMPONENTE
export class AppComponent {
  title = 'Aca desde componente.TS';

  saludo = "Hola..//(De la clase componente)";
}
