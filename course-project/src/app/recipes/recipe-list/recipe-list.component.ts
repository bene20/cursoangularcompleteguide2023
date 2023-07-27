import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Carne ao molho', 'Carne suculenta ao molho de ervas', 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2020/11/12/cozido-musculo-pressao-768x512.jpg'),
    new Recipe('Mousse de chocolate', 'Macio e zero lactose', 'https://catracalivre.com.br/wp-content/uploads/2022/03/img-8857.jpg'),
    new Recipe('Pão de queijo', 'Autêntico do interior de Minas Gerais', 'https://static.itdg.com.br/images/auto-auto/c191b11438b416fedce2c6edf6e74e3b/receitas-com-3-ingredientes.jpg'),
    new Recipe('Panqueca de carne moída', 'Um prato barato, simples e rápido', 'https://www.mariareceita.com.br/wp-content/uploads/2022/03/receita-panquecas-carne-moida.jpg'),
  ];

}
