import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecipesComponent } from './components/recipe-book-components/recipes/recipes.component';
import { RecipesListComponent } from './components/recipe-book-components/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './components/recipe-book-components/recipes-detail/recipes-detail.component';
import { ShoppingListComponent } from './components/shopping-list-components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list-components/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesItemComponent } from './components/recipe-book-components/recipes-item/recipes-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    RecipesItemComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
