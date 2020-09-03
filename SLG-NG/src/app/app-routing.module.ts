import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './components/stock/stock.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { HomeComponent } from './components/home/home.component';
import { PantryComponent} from './components/pantry/pantry.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path: 'stock', component: StockComponent},
  {path: 'recipe', component: RecipeComponent},
  {path: 'shoppinglist', component: ShoppinglistComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pantry', component: PantryComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path : '', redirectTo: '/login', pathMatch :'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
