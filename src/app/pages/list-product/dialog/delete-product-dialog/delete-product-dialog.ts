import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { IProduct } from '../../../../model/product.model';
import { ProductService } from '../../../../services/Product';

@Component({
  selector: 'app-delete-product-dialog',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './delete-product-dialog.html',
  styleUrl: './delete-product-dialog.css'
})
export class DeleteProductDialog {

  readonly dialogRef = inject(MatDialogRef<DeleteProductDialog>);
  readonly producto = inject<IProduct>(MAT_DIALOG_DATA);
  private _productService: ProductService = inject(ProductService);

  constructor() { }

  deleteProduct() {
    if (this.producto.idProduct) {
      this._productService.deleteProduct(this.producto.idProduct).subscribe({
        next: () => {
          this.dialogRef.close(true);
        }
      });
    }
  }

}
