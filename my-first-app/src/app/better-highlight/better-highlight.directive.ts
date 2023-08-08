import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor:string = 'transparent';

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {}

  @HostListener('mouseenter') mouseentrando(eventData: Event) {
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mousesaindo(eventData: Event) {
    this.backgroundColor = 'transparent';
  }

}
