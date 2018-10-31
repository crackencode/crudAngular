import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BooksShowComponent} from './books-show/books-show.component';
import {BooksComponent} from './books/books.component';
import {BookEditComponent} from './book-edit/book-edit.component';

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: ':id', component: BooksShowComponent },
  { path: ':id/edit', component: BookEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }