import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})


export class HighlightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = "#585858";
 }
 
}
