import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './components/stock/stock.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { HomeComponent } from './components/home/home.component';
import { PantryComponent} from './components/pantry/pantry.component';

const routes: Routes = [
  {path: 'stock', component: StockComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'shoppinglist', component: ShoppinglistComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pantry', component: PantryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
