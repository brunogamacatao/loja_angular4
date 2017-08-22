import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LojaService } from '../loja.service';
import { Produto } from '../../model/produto'; 

@Component({
  selector: 'app-detalhe-categoria',
  templateUrl: './detalhe-categoria.component.html',
  styleUrls: ['./detalhe-categoria.component.css']
})
export class DetalheCategoriaComponent implements OnInit {
  produtos: Produto[];

  constructor(public lojaService: LojaService, 
    public router: Router, 
    public route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.produtos = this.lojaService.getProdutos(params['slug_categoria']);
    });
  }

}
