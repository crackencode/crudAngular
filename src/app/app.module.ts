import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';

import { BookService } from './book.service';
import { BooksShowComponent } from './books-show/books-show.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { BookUpdateComponent } from './book-update/book-update.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksShowComponent,
    BookEditComponent,
    BookAddComponent,
    BookDeleteComponent,
    BookStoreComponent,
    BookUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
