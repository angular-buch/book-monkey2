import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[zoomBookCover]'
})
export class ZoomBookCoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setElementClass(this.el.nativeElement, 'small', true);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setElementClass(this.el.nativeElement, 'small', false);
  }

}
