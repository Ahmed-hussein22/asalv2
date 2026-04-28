import { Component } from '@angular/core';
import { iproduct } from '../../moduls/iproudect';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ShortdescPipe } from '../pipe/shortdesc-pipe';
import { StarPipe } from "../pipe/star-pipe";
import { Hover } from '../hover';
@Component({
  selector: 'app-hijabdetals',
  imports: [RouterLink, ShortdescPipe, StarPipe , Hover],
  templateUrl: './hijabdetals.html',
  styleUrl: './hijabdetals.css',
})
export class Hijabdetals {

  id :string |null=""
  product :any 
de :string="Some quick example text to build on the card title and make up the bulk of the card’s content."
  constructor( private x :ActivatedRoute){
x.paramMap.subscribe(p=>{this.id=p.get("id")})

this.product =this.products.find(f=>f.id==Number(this.id))

  }

 products: iproduct[] = [
    { id: 1, name: 'hijab1', price: 120, description: 'وصف المنتج', imge: '1.jpeg', catogry: 'hejab', quantity: 10, instock: true ,rate:4 },
    { id: 2, name: 'hijab2', price: 90,  description: 'وصف المنتج', imge: '2.jpeg', catogry: 'hejab', quantity: 0,  instock: false ,rate:2 },
  ];

}
