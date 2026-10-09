import { Component, AfterViewInit } from '@angular/core';

declare const WOW: any;

@Component({
  imports: [],
  selector: 'app-pizzas',
  styleUrl: './pizzas.css',
  templateUrl: './pizzas.html',
})
export class Pizzas implements AfterViewInit {

  // con la siguiente funcion esperamos a que Angular haya iniciado la vista de pizzas
  ngAfterViewInit(): void {
    // con new wow creamos una instancia de la libreria de animaciones, con .init buscamos los elementos con la clase
    //Wow y prepara sus animaciones al entrar en pantalla.
    new WOW().init();
  }
  // Una consideración: WOW.js gestiona animaciones de toda la página, no solamente de las pizzas. 
  // Por eso esta integración es provisional;
  // más adelante convendrá inicializarlo una sola vez para toda la aplicación y evitar múltiples instancias.

}