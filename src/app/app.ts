import { Component } from '@angular/core';
import { Header } from './components/header/header';
// añadimos segundo componente
import { Slider } from './components/slider/slider';


// comento y modifico debajo para añadir slider al array conservando header
// @Component({
//   selector: 'app-root',
//   imports: [Header],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
@Component({
  selector: 'app-root',
  imports: [Header, Slider],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {

}
