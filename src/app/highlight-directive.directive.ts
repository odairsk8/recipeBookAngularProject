import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[rbHighlightDirective]'
})
export class HighlightDirectiveDirective {

  @HostListener('mouseenter') onmouseover(){
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseout') onmouseout(){
    this.backgroundColor = 'blue';
  }

  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  private backgroundColor = 'blue';

  constructor(private elementRef: ElementRef, private renderer: Renderer) { 
    //console.log(this.renderer);
    //this.elementRef.nativeElement.style.backgroungColor = 'blue';
    this.renderer.setElementStyle(this.elementRef.nativeElement,"background-color", this.backgroundColor);
  }

}
