import { Routes } from '@angular/router';
import { About } from './component/about/about';
import { Notfound } from './component/notfound/notfound';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch:"full" },
    { path: 'home', component :About },
     { path: 'product', loadComponent :()=>import ('../app/component/product/product').then(p=>p.Product) },
      { path: 'dresses', loadComponent :()=>import ('../app/component/productdresses/productdresses').then(p=>p.Productdresses) },
       { path: 'hijab', loadComponent :()=>import ('../app/component/producthijab/hijab/hijab').then(p=>p.Hijab) }
       ,{ path: 'hijabdetals/:id', loadComponent :()=>import ('../app/component/hijabdetals/hijabdetals').then(p=>p.Hijabdetals) }
    ,{ path: '**', component :Notfound },

    ];
