import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: '<p>Sucesso!</p>',
  styles: [`
  p {
    border: 1px solid green;
    padding: 20px;
    background-color: palegreen;
    }
  `]
})
export class SuccessAlertComponent {

}
