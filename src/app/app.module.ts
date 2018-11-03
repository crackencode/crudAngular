import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';

import {BookService} from './book.service';
import {BooksShowComponent} from './books-show/books-show.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookAddComponent} from './book-add/book-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksShowComponent,
    BookEditComponent,
    BookAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
