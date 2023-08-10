import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{

  @Input() openclass: string = 'open';
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') toggleOpen(eventData: Event){
    this.isOpen = !this.isOpen;
  }
}
