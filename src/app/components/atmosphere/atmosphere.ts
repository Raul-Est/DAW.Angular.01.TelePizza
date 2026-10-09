import { Component, AfterViewInit } from '@angular/core';

declare const jQuery: any;

@Component({
  selector: 'app-atmosphere',
  imports: [],
  templateUrl: './atmosphere.html',
  styleUrl: './atmosphere.css'
})

export class Atmosphere implements AfterViewInit {

  //activamos el efecto parallax
  ngAfterViewInit(): void {
    jQuery('.parallax-container').parallax();
  }
}