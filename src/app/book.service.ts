import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Book} from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://digitalgreen.local/api';

  constructor(public http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<Book[]>(this.url + '/books');
  }

  showBook(id: number): Observable<any> {
    return this.http.get<Book[]>(this.url + '/books/' + id);
  }

  editBook(id: number): Observable<any> {
    return this.http.get<Book[]>(this.url + '/books/' + id + '/edit');
  }

  storeBook(id: number): Observable<any> {
    return this.http.get<Book[]>(this.url + '/books/' + id);
  }

  updateBook(id: number): Observable<any> {
    return this.http.get<Book[]>(this.url + '/books/' + id);
  }

  addBook(id: number): Observable<any> {
    return this.http.get<Book[]>(this.url + '/books/' + id);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.get<Book[]>(this.url + '/books/' + id);
  }
}
