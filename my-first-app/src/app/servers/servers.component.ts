import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer=false;
  serverCreationStatus = 'Nenhum servidor criado até o momento.';
  serverName='Sem nome';
  username='';
  serverStatus='offline';

  constructor(){
    setTimeout(() => {this.allowNewServer=true}, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'online':'offline'; 
  }

  onCreateServer(){
    this.serverCreationStatus = 'Servidor criado com sucesso! It is '+this.serverStatus;
  }

  getColor(){
    return this.serverStatus == 'online' ? 'green':'red';
  }

  onInputServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

  clearUserName(){
    this.username='';
  }

  clearUsernameDisabled(){
    return !(this.username && this.username.length > 0);
  }
}
