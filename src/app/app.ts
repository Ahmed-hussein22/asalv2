import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import { Product } from './component/product/product';
import { Slider } from './component/slider/slider';
import { About } from './component/about/about';
import { Productdresses } from './component/productdresses/productdresses';
import { Hijab } from './component/producthijab/hijab/hijab';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Footer,Product,Slider,About,Productdresses,Hijab],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('asaltopapp');
}
