import { Component, signal } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productdresses',
  imports: [FormsModule],
  templateUrl: './productdresses.html',
  styleUrl: './productdresses.css',
})
export class Productdresses 
{
  
selectedCategory:string="all";

products = signal([
{ id: 1, name: 'dress1', price: 120, image: '1.jpeg', inStock: true, category: 'dresses' },
{ id: 2, name: 'dress2', price: 90, image: '3.jpeg', inStock: false, category: 'dresses' },
{ id: 3, name: 'dress3', price: 150, image: '4.jpeg', inStock: true, category: 'dresses' },
{ id: 4, name: 'dress4', price: 300, image: '6.jpeg', inStock: false, category: 'hejab' }
,
{ id: 4, name: 'dress4', price: 300, image: '6.jpeg', inStock: false, category: 'dresses' }
,
{ id: 4, name: 'dress4', price: 300, image: '6.jpeg', inStock: false, category: 'dresses' }
,
{ id: 4, name: 'dress4', price: 300, image: '6.jpeg', inStock: false, category: 'hejab' }
,
{ id: 4, name: 'dress4', price: 300, image: '6.jpeg', inStock: false, category: 'nekab' }
]);


alirt (id :number)
{
  
alert(`${this.products()[id].name} add to card`)  
}

}
