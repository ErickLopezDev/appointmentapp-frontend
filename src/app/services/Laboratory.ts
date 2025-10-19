import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ILaboratory } from '../model/laboratory.model';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  private host: string = environment.HOST;
  private http: HttpClient = inject(HttpClient);
  private apiEndpoint: string = `${this.host}/laboratories`;

  public getList(): Observable<ILaboratory[]> {
    const url = `${this.apiEndpoint}`;
    return this.http.get<ILaboratory[]>(url)
  }

}
