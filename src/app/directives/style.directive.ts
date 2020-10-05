import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color = 'blue';
  @Input() fontWeight = 'normal';
  @Input() dStyles: {border: string, fontWeight: string, borderRadius: string};

  @HostBinding('style.color') elColor = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('click', ['$event.target']) onClick(event: Event): void {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter(): void {
    this.elColor = this.color;
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
    this.renderer.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
  }

  @HostListener('mouseleave') onLeave(): void {
    this.elColor = null;
    this.renderer.setStyle(this.el.nativeElement, 'color', null);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null);
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null);
    this.renderer.setStyle(this.el.nativeElement, 'border', null);
  }

}
