import { Component, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.html',
  styleUrls: ['./slider.css']
})
export class Slider implements AfterViewInit {

  ngAfterViewInit(): void {
    const element = document.querySelector('#mainSlider');

    if (element) {
      new bootstrap.Carousel(element, {
        interval: 2000,
        ride: 'carousel'
      });
    }
  }
}