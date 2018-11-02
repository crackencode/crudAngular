import {Component, OnInit} from '@angular/core';

import {BookService} from '../book.service';
import {Book} from '../Book';
import {ActivatedRoute} from '@angular/router';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {

  book: Book;
  todaydate: Date = new Date();
  data: any;

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
          this.errorAutor = false;
          this.errorTitle = false;
          this.errorISBN = false;
          this.errorDate = false;

          for (let error of Object.keys(result['errors'])) {
            if (error === 'autor') {
              this.errorAutor = true;
            }

            if (error === 'title') {
              this.errorTitle = true;
            }

            if (error === 'ISBN') {
              this.errorISBN = true;
            }

            if (error === 'publication_date') {
              this.errorDate = true;
            }
          }

          this.success = false;
          this.fail = true;
        } else {
          console.log(result);
          this.errorAutor = false;
          this.errorTitle = false;
          this.errorISBN = false;
          this.errorDate = false;
          this.success = true;
          this.fail = false;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
