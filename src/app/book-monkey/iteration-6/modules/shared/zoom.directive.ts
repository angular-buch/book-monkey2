import { Directive, Input, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({
  selector: '[bmZoom]'
})
export class ZoomDirective {
  @Input() bmZoom: string; // zoom size

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setElementClass(this.el.nativeElement, this.bmZoom || 'small', true);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setElementClass(this.el.nativeElement, this.bmZoom || 'small', false);
  }
}
