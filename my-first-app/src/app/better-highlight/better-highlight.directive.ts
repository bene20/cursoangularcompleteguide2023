import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input() highLightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor:string;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseentrando(eventData: Event) {
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') mousesaindo(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }

}
