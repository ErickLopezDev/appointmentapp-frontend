import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IFamily } from '../model/family.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {

  private host: string = environment.HOST;
  private http: HttpClient = inject(HttpClient);
  private apiEndpoint: string = `${this.host}/families`;

  public getList(): Observable<IFamily[]> {
    const url = `${this.apiEndpoint}`;
    return this.http.get<IFamily[]>(url)
  }

}
