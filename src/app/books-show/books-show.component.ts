import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {BookService} from '../book.service';
import {Book} from '../Book';

@Component({
  selector: 'app-books-show',
  templateUrl: './books-show.component.html',
  styleUrls: ['./books-show.component.scss']
})
export class BooksShowComponent implements OnInit {

  book: Book;

  /**
   * Mostramos el resultado del libro que queremos ver
   */
  constructor(private route: ActivatedRoute, private service: BookService) {
    const id = +this.route.snapshot.paramMap.get('id');

    this.service.showBook(id).subscribe(
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

}
