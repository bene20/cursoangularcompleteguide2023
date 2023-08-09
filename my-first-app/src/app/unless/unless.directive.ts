import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input() set appUnless(condition: boolean) {
    if(!condition) {
      //Inclui o conteúdo do template embutido no ponto (cria uma view no ponto marcado com esta diretiva)
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear(); //Remove da DOM tudo o que foi marcado com esta diretiva
    }
  }

  /**
   * templateRef: O que será incluído (conteúdo de ng_template ou do componente marcado com esta diretiva estrutural)
   * viewRef: referência do ponto que está marcado com esta diretiva
  */
  constructor(private templateRef: TemplateRef<any>, private viewRef: ViewContainerRef) { }

}
