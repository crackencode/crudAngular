import {Component, OnInit} from '@angular/core';

import {BookService} from '../book.service';
import {Book} from '../Book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public books: Book[];
  private booksResult: Book[];

  // pagina en la que estamos
  public page: number;

  // Número total de páginas
  public totalPages: number;

  // Total de libros existentes
  public numBooks: number;

  // Numero de resultados por pagina
  private numResults = 3;

  private init: number;
  public listPages = [];

  public deleteError = false;
  public deleteId = 0;
  public deleteTitle = '';

  constructor(public service: BookService) {
    this.page = 1;

    this.getBooksByPage();
  }

  ngOnInit() {
  }

  /**
   * Muestra una lista de resultados paginados
   */
  getBooksByPage() {
    this.service.getBooks().subscribe(
      result => {
        this.numBooks = result.length;
        this.totalPages = Math.ceil(this.numBooks / this.numResults);

        // Iniciamos el numero de resultado que debe mostrar
        if (this.page === 1) {
          this.init = 0;
        } else {
          this.init = this.page * this.numResults - this.numResults;
        }

        // Cogemos los resultados que vamos a mostrar
        this.booksResult = [];
        for (let i = this.init; i < this.init + this.numResults; i++) {
          if (typeof result[i] !== 'undefined') {
            this.booksResult.push(result[i]);
          }
        }

        // Listado de paginas a mostrar
        this.listPages = [];
        for (let i = 1; i <= this.totalPages; i++) {
          let active = '';
          if (this.page === i) {
            active = 'active';
          }
          this.listPages.push({'page': i, 'active': active});
        }

        this.books = this.booksResult;
      },
      error => {
        console.log(<any>error);
      });
  }

  /**
   * Pagina anterior de resultados
   */
  public previousPage() {
    this.page--;

    this.getBooksByPage();
  }

  /**
   * Pagina especifica de resultados
   */
  public goToPage(numPage: number) {
    this.page = numPage;

    this.getBooksByPage();
  }

  /**
   * Pagina siguiente de resultados
   */
  public nextPage() {
    this.page++;

    this.getBooksByPage();
  }

  /**
   * Envia informacion para borrar el libro elegido
   */
  public deleteData(id: number) {
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
