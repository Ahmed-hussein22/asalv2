import { ElementRef, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class Hover {
   constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.transform = 'scale(1.2)';
    this.el.nativeElement.style.transition = 'all 0.3s ease-in-out';
    this.el.nativeElement.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
  }

  @HostListener('mouseleave') onMouseLeave() {
this.el.nativeElement.style.transform = 'scale(1)';
    this.el.nativeElement.style.transition = 'all 0.3s ease-in-out';
        this.el.nativeElement.style.boxShadow = 'none';
  }
}
