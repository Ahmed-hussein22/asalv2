import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortdesc',
})
export class ShortdescPipe implements PipeTransform {
  transform(value: string, limit :number=20): string  {
    
    
      if (value.length <= limit) return value;
    return value.slice(0, limit) + '...';
  }
}
