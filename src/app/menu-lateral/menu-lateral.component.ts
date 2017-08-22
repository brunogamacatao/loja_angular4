import { Component } from '@angular/core';
import { LojaService } from '../loja.service';
import { Categoria } from '../../model/categoria';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent {
  categorias: Categoria[];

  constructor(lojaService: LojaService) { 
    this.categorias = lojaService.getCategorias();
  }
}
