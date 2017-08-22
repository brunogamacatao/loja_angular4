import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { LojaService } from './loja.service';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { PromocoesComponent } from './promocoes/promocoes.component';
import { DetalheCategoriaComponent } from './detalhe-categoria/detalhe-categoria.component';
import { ProdutoComponent } from './produto/produto.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { TopoComponent } from './topo/topo.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const rotas: Routes = [
  {path: 'promocoes', component: PromocoesComponent},
  {path: 'carrinho', component: CarrinhoComponent},
  {path: ':slug_categoria', component: DetalheCategoriaComponent},
  {path: ':slug_categoria/:slug_produto', component: DetalheProdutoComponent},
  {path: '', redirectTo: 'promocoes', pathMatch: 'full' },
  {path: '**', component: PaginaNaoEncontradaComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuLateralComponent,
    PromocoesComponent,
    DetalheCategoriaComponent,
    ProdutoComponent,
    DetalheProdutoComponent,
    PaginaNaoEncontradaComponent,
    TopoComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotas)
  ],
  providers: [LojaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
