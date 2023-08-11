import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Carne ao molho', 'Carne suculenta ao molho de ervas', 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2020/11/12/cozido-musculo-pressao-768x512.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe('Mousse de chocolate', 'Macio e zero lactose', 'https://catracalivre.com.br/wp-content/uploads/2022/03/img-8857.jpg',
            [
                new Ingredient('Milk', 2),
                new Ingredient('Chocolate', 1)
            ]),
        new Recipe('Pão de queijo', 'Autêntico do interior de Minas Gerais', 'https://static.itdg.com.br/images/auto-auto/c191b11438b416fedce2c6edf6e74e3b/receitas-com-3-ingredientes.jpg',
            [
                new Ingredient('Salt', 2),
                new Ingredient('Cheese', 1)
            ]),
        new Recipe('Panqueca de carne moída', 'Um prato barato, simples e rápido', 'https://www.mariareceita.com.br/wp-content/uploads/2022/03/receita-panquecas-carne-moida.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Tomatoe', 2),
                new Ingredient('Milk', 1)
            ]),
      ];

    getRecipes() {
        //retorna uma cópia do array recipes
        return this.recipes.slice(); 
    }
}