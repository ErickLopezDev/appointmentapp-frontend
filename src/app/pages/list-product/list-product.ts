import { Component, importProvidersFrom, inject, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../model/product.model';
import { ProductService } from '../../services/Product';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductDialog } from './dialog/delete-product-dialog/delete-product-dialog';

@Component({
  selector: 'app-list-product',
  imports: [MatTableModule, MatButton, RouterModule, CommonModule],
  templateUrl: './list-product.html',
  styleUrl: './list-product.css'
})
export class ListProduct implements OnInit {

  private _productService: ProductService = inject(ProductService);
  readonly dialog = inject(MatDialog);

  displayedColumns: string[] = ['idProduct', 'productName', 'productDescription', 'productPresentation', 'productUnitPrice', 'productStock', 'productExpired', 'idCategory', 'idFamily', 'idLaboratory', 'actions'];
  patients: IProduct[] = []

  constructor() {

  }

  ngOnInit(): void {
    this.loadPatient();
  }

  openDialog(product: IProduct): void {
    const dialogRef = this.dialog.open(DeleteProductDialog, {
      width: '250px',
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPatient();
      }
    })
  }

  loadPatient() {
    this._productService.getListProducts().subscribe({
      next: (data) => {
        this.patients = data;
      }
    })
  }

}
