import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Teste de Recipe', 'Um simples teste', 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2020/11/12/cozido-musculo-pressao-768x512.jpg')
  ];

}
