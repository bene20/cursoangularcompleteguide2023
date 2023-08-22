import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.updateServer(this.route.snapshot.params); 
    this.route.params.subscribe(
      (params: Params) => this.updateServer(params)
    );
  }

  updateServer(params: Params){
    // o '+' abaixo converte o string em número
    const idServer = +params['id']; 
    this.server = this.serversService.getServer(idServer);
  }

  onEdit(){
    // Na linha abaixo uso a rota relativa (adicionando apenas o 'edit' na url, em vez de usar a rota absoluta.)
    // Como seria a rota absoluta: this.router.navigate(['/servers', this.server.id, 'edit']);
    // this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
