import { Injectable } from '@angular/core';

import { Produto } from '../model/produto';
import { Categoria } from '../model/categoria';

@Injectable()
export class LojaService {
  // Banco de dados de categorias
  _categorias: Categoria[] = [
    {slug: 'celulares', nome: 'Celulares'},
    {slug: 'informatica', nome: 'Informática'},
    {slug: 'eletrodomesticos', nome: 'Eletrodomésticos'}
  ];

  _produtos: Map<string, Produto[]>;
  _carrinho: Produto[] = [];

  constructor() {
    this._produtos = new Map<string, Produto[]>();

    // Banco de dados de produtos
    this._produtos.set('celulares', [
      {promocao: false, slug: 'galaxy_s7', slugCategoria: 'celulares', nome: 'Smartphone Samsung Galaxy S7', valor: 1999.0, estoque: 10, icone: 'https://images-americanas.b2w.io/produtos/01/00/item/125916/4/125916485G1.png', foto: 'https://images-americanas.b2w.io/produtos/01/00/item/125916/4/125916485_1GG.png'},
      {promocao: true, slug: 'moto_g5', slugCategoria: 'celulares', nome: 'Smartphone Moto G 5', valor: 899.0, estoque: 10, icone: 'https://images-americanas.b2w.io/produtos/01/00/item/131349/7/131349704G1.png', foto: 'https://images-americanas.b2w.io/produtos/01/00/item/131349/7/131349704_1GG.png'},
      {promocao: true, slug: 'samsung_galaxy', slugCategoria: 'celulares', nome: 'Smartphone Samsung Galaxy J5', valor: 665.56, estoque: 10, icone: 'https://images-americanas.b2w.io/produtos/01/00/item/124132/6/124132646G1.png', foto: 'https://images-americanas.b2w.io/produtos/01/00/item/124132/6/124132646_1GG.png'}
    ]);
  }

  // Retorna todas as categorias
  getCategorias(): Categoria[] {
    return this._categorias;
  }

  // Retorna todos os produtos de uma categoria
  getProdutos(slugCategoria): Produto[] {
    return this._produtos.get(slugCategoria);
  }

  // Retorna um determinado produto
  getProduto(slugCategoria, slugProduto): Produto {
    return this.getProdutos(slugCategoria).filter(produto => produto.slug === slugProduto)[0];
  }

  // Retorna todos os produtos promocionais
  getProdutosPromocionais(): Produto[] {
    let promocionais = [];

    this._produtos.forEach((produtos, categoriaSlug) => {
      promocionais = promocionais.concat(produtos.filter(produto => produto.promocao));
    });

    return promocionais;
  }

  comprar(produto: Produto): void {
    produto.estoque--;
    this._carrinho.push({...produto});
  }

  get carrinho(): Produto[] {
    return this._carrinho;
  }
}
