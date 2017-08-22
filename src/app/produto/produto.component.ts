import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { LojaService } from '../loja.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {
  @Input()
  produto: Produto;

  constructor(public lojaService: LojaService, public router: Router) {
  }

  detalhe() {
    this.router.navigate(['/', this.produto.slugCategoria, this.produto.slug]);
  }

  comprar() {
    this.lojaService.comprar(this.produto);
  }
}
