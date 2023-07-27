import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
      color: white
    }
  `]
})
export class ServerComponent {
  @Input('serverElement') element: {serverId: number, serverName: string, serverStatus: string};

  constructor(){}

  getColor(){
    return this.element.serverStatus == 'online' ? 'green':'red'; 
  }

  changeStatus(){
    this.element.serverStatus = (this.element.serverStatus == 'online' ? 'offline' : 'online');
  }
}