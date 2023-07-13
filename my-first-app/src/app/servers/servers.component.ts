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
  servers = ['Production server', 'Homologation server'];
  username='';
  showDetail=false;
  exibicoesDetalhe=[];

  constructor(){
    setTimeout(() => {this.allowNewServer=true}, 2000);
  }

  onCreateServer(){
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Servidor criado com sucesso!';
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

  mostraDetalhe(){
    if(!this.showDetail){
      this.exibicoesDetalhe.push({
        id: 1+this.exibicoesDetalhe.length,
        data: new Date()
      });
    }
    this.showDetail=!this.showDetail;
    console.log(this.exibicoesDetalhe);
  }
}
