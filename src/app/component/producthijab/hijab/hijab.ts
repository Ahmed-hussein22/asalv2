import { Component } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { iproduct } from '../../../moduls/iproudect';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-hijab',
  imports: [FormsModule, RouterLink],
  templateUrl: './hijab.html',
  styleUrl: './hijab.css',
})
export class Hijab {

   selectedCategory:string="all";
 products: iproduct[] = [
    { id: 1, name: 'hijab1', price: 120, description: 'وصف المنتج', imge: '1.jpeg', catogry: 'hejab', quantity: 10, instock: true ,rate:4},
    { id: 2, name: 'hijab2', price: 90,  description: 'وصف المنتج', imge: '2.jpeg', catogry: 'hejab', quantity: 0,  instock: false,rate:6 },
  ];

 alirt (id :number)
{
  
alert(`${this.products[id].name} add to card`)  
}

}
