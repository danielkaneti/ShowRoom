import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = "#F0F0F0";
 }
 
}
