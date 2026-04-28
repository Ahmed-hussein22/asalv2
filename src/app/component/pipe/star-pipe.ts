import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star',
})
export class StarPipe implements PipeTransform {
  transform(value: number, limit :number=5): string{
     
   let full= "🌟"
  let   empty="☆"
let allfull= full.repeat(Math.round(value))
let allempty=empty.repeat(Math.round(limit -Math.round(value)))
    return allfull+allempty  ;
  }
}
