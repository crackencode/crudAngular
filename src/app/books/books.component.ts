import {Component, OnInit} from '@angular/core';

import {BookService} from '../book.service';
import {Book} from '../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[];
  deleteError = false;
  deleteId = 0;
  deleteTitle = '';

  constructor(public service: BookService) {
    this.service.getBooks().subscribe(
      result => {
        this.books = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ngOnInit() {
  }

  deleteData(id: number) {
    console.log(id);
    this.service.deleteBook(id).subscribe(
      result => {
        if (result) {
          location.reload();
        } else {
          this.deleteError = true;
        }
      }
    );
  }
}
