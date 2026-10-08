import { Component } from '@angular/core';
import { Header } from './components/header/header';
// añadimos segundo componente
import { Slider } from './components/slider/slider';
// añadimos tercer componente
import { Menu } from './components/menu/menu';

// comento y modifico debajo para añadir slider al array conservando header
// @Component({
//   selector: 'app-root',
//   imports: [Header],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })

// primero añadi slider al array, y luego añadí menu
@Component({
  selector: 'app-root',
  imports: [Header, Slider,Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

}
