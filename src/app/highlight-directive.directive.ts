import {
  Directive,
  ElementRef,
  Renderer,
  HostListener,
  HostBinding,
  OnInit,
  Input
} from '@angular/core';

@Directive({
  selector: '[highLight]'
})
export class HighlightDirectiveDirective {

  
  @Input() defaultColor = 'blue';
  @Input('highLight') highLightColor = 'yellow';

  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseout') onmouseout() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  private backgroundColor;
  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //console.log(this.renderer);
    //this.elementRef.nativeElement.style.backgroungColor = 'blue';
    this.renderer.setElementStyle(this.elementRef.nativeElement, "background-color", this.backgroundColor);
  }

  OnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
