import {Component, OnInit} from '@angular/core';

import {BookService} from '../book.service';
import {Book} from '../Book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  book: Book;
  todaydate: Date = new Date();
  errorAutor = false;
  errorTitle = false;
  errorISBN = false;
  errorDate = false;
  success = false;
  fail = false;

  constructor(private route: ActivatedRoute, private service: BookService) {
    const id = +this.route.snapshot.paramMap.get('id');

    this.service.editBook(id).subscribe(
      result => {
        this.book = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  ngOnInit() {
  }

  sendData() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.service.updateBook(this.book, id).subscribe(
      result => {
        if (result['errors']) {
          this.errorAutor = true;
          this.fail = true;
        } else {
          this.success = true;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
