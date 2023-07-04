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

  constructor(){
    setTimeout(() => {this.allowNewServer=true}, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = 'Servidor criado com sucesso!';
  }

  onInputServerName(event: Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
