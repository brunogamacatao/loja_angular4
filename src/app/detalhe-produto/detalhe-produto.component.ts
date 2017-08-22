import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LojaService } from '../loja.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-detalhe-produto',
  templateUrl: './detalhe-produto.component.html',
  styleUrls: ['./detalhe-produto.component.css']
})
export class DetalheProdutoComponent implements OnInit {
  produto: Produto;

  constructor(public lojaService: LojaService, 
    public router: Router, 
    public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.produto = this.lojaService.getProduto(params['slug_categoria'], params['slug_produto']);
    });
  }

  comprar() {
    this.lojaService.comprar(this.produto);
    this.router.navigate(['/', this.produto.slugCategoria]);
  }
}
