import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LojaService } from '../loja.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent {
  carrinho: Produto[];

  constructor(public lojaService: LojaService,
    public router: Router, 
    public route: ActivatedRoute) {
    this.carrinho = lojaService.carrinho;
  }

  ver() {
    this.router.navigate(['/carrinho']);
  }
}
