import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-aleatorio',
  templateUrl: './aleatorio.component.html',
  styleUrls: ['./aleatorio.component.css']
})
export class AleatorioComponent {

aleatorio:number= Math.floor( Math.random() * 100);
title = 'Pruebas';


}
