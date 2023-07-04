import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: '<p>Atenção!</p>',
    styles: [`
    p {
      border: 1px solid red;
      padding: 20px;
      background-color: mistyrose;
      }
    `]
})
export class WarningAlertComponent {

}