import { Component } from '@angular/core';

import { LojaService } from '../loja.service';
import { Produto } from '../../model/produto';

@Component({
  selector: 'app-promocoes',
  templateUrl: './promocoes.component.html',
  styleUrls: ['./promocoes.component.css']
})
export class PromocoesComponent {
  produtos: Produto[];

  constructor(public lojaService: LojaService) {
    this.produtos = lojaService.getProdutosPromocionais();
  }

}
