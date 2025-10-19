import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { IProduct } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private host: string = environment.HOST;
  private http: HttpClient = inject(HttpClient);
  private apiEndpoint: string = `${this.host}/products`;

  public getListProducts(): Observable<IProduct[]> {
    const url = `${this.apiEndpoint}`;
    return this.http.get<IProduct[]>(url)
  }

  public getProductById(id: number): Observable<IProduct> {
    const url = `${this.apiEndpoint}/${id}`;
    return this.http.get<IProduct>(url);
  }

  public saveProduct(IProduct: IProduct): Observable<IProduct> {
    const url = `${this.apiEndpoint}`;
    return this.http.post<IProduct>(url, IProduct);
  }

  public deleteProduct(id: number): Observable<void> {
    const url = `${this.apiEndpoint}/${id}`;
    return this.http.delete<void>(url);
  }

  public updateProduct(IProduct: IProduct): Observable<IProduct> {
    const url = `${this.apiEndpoint}/${IProduct.idProduct}`;
    return this.http.put<IProduct>(url, IProduct);
  }

}
