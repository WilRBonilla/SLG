import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StockComponent } from './components/stock/stock.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { HomeComponent } from './components/home/home.component';
import { PantryComponent } from './components/pantry/pantry.component';

import { SlgService } from './services/slg.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StockComponent,
    RecipeComponent,
    ShoppinglistComponent,
    HomeComponent,
    PantryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SlgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
