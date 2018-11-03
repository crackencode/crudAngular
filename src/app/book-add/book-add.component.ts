import {Component, OnInit} from '@angular/core';
import {Book} from '../Book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  book: Book;
  todaydate: Date = new Date();

  errorAutor = false;
  errorTitle = false;
  errorISBN = false;
  errorDate = false;
  success = false;
  fail = false;

  constructor(public service: BookService) {
    this.book = {
      'id': 0,
      'autor': '',
      'title': '',
      'ISBN': '',
      'publication_date': ''
    };
  }

  ngOnInit() {
  }

  /**
   * Enviamos la informacion para añadir un libro nuevo
   */
  addData() {
    this.service.createBook(this.book).subscribe(
      result => {
        if (result['errors']) {
          // Si no pasa la validacion, mostramos los campos que estan mal
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
