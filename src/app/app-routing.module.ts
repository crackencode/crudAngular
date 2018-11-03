import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BooksShowComponent} from './books-show/books-show.component';
import {BooksComponent} from './books/books.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookAddComponent} from './book-add/book-add.component';

const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'show/:id', component: BooksShowComponent},
  {path: 'edit/:id', component: BookEditComponent},
  {path: 'create', component: BookAddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}