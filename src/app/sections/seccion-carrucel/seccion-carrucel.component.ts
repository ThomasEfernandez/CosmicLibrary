
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-seccion-carrucel',
  imports: [CommonModule],
  templateUrl: './seccion-carrucel.component.html',
  styleUrl: './seccion-carrucel.component.css'
})
export class SeccionCarrucelComponent  implements AfterViewInit {
  @ViewChild('carruselContainer') carruselContainer!: ElementRef;

  desplazamiento = 0;
  transformStyle = 'translateX(0px)';
  cardWidth = 320;

  items = [
    {
      img: 'images/comic.jpg',
      title: 'Comic 1',
      description: 'Una aventura épica en un mundo de fantasía.'
    },    {
      img: 'images/comic.jpg',
      title: 'Comic 2',
      description: 'Una aventura épica en un mundo de fantasía.'
    },    {
      img: 'images/comic.jpg',
      title: 'Comic 3',
      description: 'Una aventura épica en un mundo de fantasía.'
    },    {
      img: 'images/comic.jpg',
      title: 'Comic 4',
      description: 'Una aventura épica en un mundo de fantasía.'
    },    {
      img: 'images/comic.jpg',
      title: 'Comic 5',
      description: 'Una aventura épica en un mundo de fantasía.'
    },

  ];

  maxScroll = 0;

  ngAfterViewInit() {
    const container = this.carruselContainer.nativeElement;
    this.maxScroll = container.scrollWidth - container.offsetWidth;
  }

  moverCarrusel(direccion: number) {
    this.desplazamiento += direccion * this.cardWidth;
    if (this.desplazamiento < 0) this.desplazamiento = 0;
    if (this.desplazamiento > this.maxScroll) this.desplazamiento = this.maxScroll;
    this.transformStyle = `translateX(-${this.desplazamiento}px)`;
  }
}