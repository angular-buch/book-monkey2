import { Directive, Input, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[zoomBookCover]'
})
export class ZoomBookCoverDirective {
  @Input('zoomBookCover') size: string;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setElementClass(this.el.nativeElement, this.size || 'small', true);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setElementClass(this.el.nativeElement, this.size || 'small', false);
  }
}
