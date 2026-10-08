// import { Component } from '@angular/core';
// Importamos la interfaz que permite ejecutar código después de que Angular inicialice la vista del componente.
import { Component, AfterViewInit } from '@angular/core';

// Indica a TypeScript que existe una variable global llamada jQuery, proporcionada por los scripts originales que ya cargas en index.html.
declare const jQuery: any;


@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})

// Lo sustituimos para inicializar RD Navbar cuandoAngular termina de cargar la cabecera
// export class Header {
  
// }

export class Header implements AfterViewInit {

  ngAfterViewInit(): void {
    jQuery('.rd-navbar').RDNavbar();
  }

}
