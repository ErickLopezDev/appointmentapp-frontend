import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ICategory } from '../model/categoria.mode';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private host: string = environment.HOST;
  private http: HttpClient = inject(HttpClient);
  private apiEndpoint: string = `${this.host}/categories`;

  public getList(): Observable<ICategory[]> {
    const url = `${this.apiEndpoint}`;
    return this.http.get<ICategory[]>(url)
  }

}
