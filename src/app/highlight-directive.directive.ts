import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[rbHighlightDirective]'
})
export class HighlightDirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer) { 
    //console.log(this.renderer);
    this.elementRef.nativeElement.style.backgroungColor = 'blue';
    //this.renderer.setElementStyle(this.elementRef,"background-color", "blue");
  }

}
