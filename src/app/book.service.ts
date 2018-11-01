import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Book} from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url = 'http://digitalgreen.local/api/books';

  constructor(public http: HttpClient) {
  }

  getBooks(): Observable<any> {
    return this.http.get<Book[]>(this.url);
  }

  showBook(id: number): Observable<any> {
    return this.http.get<Book>(this.url + '/' + id);
  }

  editBook(id: number): Observable<any> {
    return this.http.get<Book>(this.url + '/' + id);
  }

  updateBook(data: Book, id: number) {
    return this.http.put<Book>(this.url + '/' + id, data);
  }
}
