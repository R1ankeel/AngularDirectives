import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color = 'blue';
  @Input() fontWeight = 'normal';
  @Input() dStyles: {border: string, fontWeight: string, borderRadius: string};

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
  }

  @HostListener('mouseleave') onLeave(): void {
    this.renderer.setStyle(this.el.nativeElement, 'color', null);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null);
  }

}
