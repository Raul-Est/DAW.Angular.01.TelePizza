// Comento hasta la linea 10 para solucionar el problema, y que se inicialice el componente cuando Angular haya cargado.
// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-slider',
//   styleUrl: './slider.css',
//   templateUrl: './slider.html',
// })
// export class Slider {}

import { Component, AfterViewInit } from '@angular/core';

declare const jQuery: any;

@Component({
  imports: [],
  selector: 'app-slider',
  styleUrl: './slider.css',
  templateUrl: './slider.html',
})
export class Slider implements AfterViewInit {

  ngAfterViewInit(): void {

    // Aplicar las imágenes originales del carrusel
    jQuery('.swiper-slide[data-slide-bg]').each(
      function (this: HTMLElement) {

        // busca todas las imagenes con data-slide-bg
        const image = this.getAttribute('data-slide-bg');

        // despues las convierte en imagen de fondo
        if (image) {
          this.style.backgroundImage = `url('/${image.replace(/^\/+/, '')}')`;
        }

      }
    );

    // Comento estas lineas para añadir el cambio automatico de imagen de foto debajo.
    // // Y inicializamos el Swiper
    // jQuery('.swiper-container').swiper();

    // Inicializar Swiper CON CAMBIO AUTOMATICO
    jQuery('.swiper-container').swiper({
      loop: true,
      autoplay: 5000,
      speed: 600,

      pagination: '.swiper-pagination',
      paginationClickable: true,

      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',

      effect: 'fade'
    });

  }

}
