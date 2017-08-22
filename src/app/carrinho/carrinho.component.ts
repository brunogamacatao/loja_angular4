import { Component } from '@angular/core';

import { LojaService } from '../loja.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  carrinho: Produto[];

  constructor(public lojaService: LojaService) {
    this.carrinho = lojaService.carrinho;
  }
}
