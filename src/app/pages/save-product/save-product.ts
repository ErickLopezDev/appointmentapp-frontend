import { ChangeDetectionStrategy, Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/Product';
import { IProduct } from '../../model/product.model';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter } from '@angular/material/core';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../../model/categoria.mode';
import { IFamily } from '../../model/family.model';
import { ILaboratory } from '../../model/laboratory.model';
import { CategoryService } from '../../services/Category';
import { FamilyService } from '../../services/Family';
import { LaboratoryService } from '../../services/Laboratory';

@Component({
  selector: 'app-save-product',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, ReactiveFormsModule, RouterModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './save-product.html',
  styleUrl: './save-product.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaveProduct implements OnInit {

  private _fb: FormBuilder = inject(FormBuilder);
  private _productService = inject(ProductService);
  private _categoryService = inject(CategoryService);
  private _familyService = inject(FamilyService);
  private _laboratoryService = inject(LaboratoryService);
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);

  idParameter: number | null = null;

  categories: ICategory[] = [];
  families: IFamily[] = [];
  laboratories: ILaboratory[] = [];

  form = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    description: ['', [Validators.required, Validators.maxLength(200)]],
    presentation: ['', [Validators.required, Validators.maxLength(200)]],
    unitPrice: [null as number | null, [Validators.required]],
    stock: [null as number | null, [Validators.required]],
    expired: ['', [Validators.required]],
    category: [null as number | null, [Validators.required]],
    family: [null as number | null, [Validators.required]],
    laboratory: [null as number | null, [Validators.required]],
  });

  ngOnInit(): void {
    this.setCategories();
    this.setFamilies();
    this.setLaboratories();

    this._activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.idParameter = Number(id);
        this._productService.getProductById(this.idParameter).subscribe({
          next: (data) => {
            this.form.patchValue({
              name: data.name,
              description: data.description,
              presentation: data.presentation,
              unitPrice: data.unitPrice || 0,
              stock: data.stock,
              expired: data.expired,
              category: data.category,
              family: data.family,
              laboratory: data.laboratory,
            });
          }
        })
      } else {
        this.idParameter = null;
      }
    })

  }

  setCategories(): void {
    this._categoryService.getList().subscribe({
      next: (data) => {
        this.categories = data;
      }
    })
  }

  setFamilies(): void {
    this._familyService.getList().subscribe({
      next: (data) => {
        this.families = data;
      }
    })
  }

  setLaboratories(): void {
    this._laboratoryService.getList().subscribe({
      next: (data) => {
        this.laboratories = data;
      }
    })
  }


  updateProduct(): void {
    if (this.form.invalid || this.idParameter === null) return;
    const product: IProduct = {
      idProduct: this.idParameter,
      name: this.form.value.name!,
      description: this.form.value.description!,
      presentation: this.form.value.presentation!,
      unitPrice: this.form.value.unitPrice!,
      stock: this.form.value.stock!,
      expired: this.form.value.expired!,
      category: this.form.value.category!,
      family: this.form.value.family!,
      laboratory: this.form.value.laboratory!,
    };
    this._productService.updateProduct(product).subscribe({
      next: (data) => {
        this._router.navigate(['/']);
      }
    })

  }


  saveProduct(): void {
    if (this.form.invalid) return;

    const product: IProduct = {
      name: this.form.value.name!,
      description: this.form.value.description!,
      presentation: this.form.value.presentation!,
      unitPrice: this.form.value.unitPrice!,
      stock: this.form.value.stock!,
      expired: this.form.value.expired!,
      category: this.form.value.category!,
      family: this.form.value.family!,
      laboratory: this.form.value.laboratory!,
    };

    this._productService.saveProduct(product).subscribe({
      next: (data) => {
        this._router.navigate(['/']);
      }
    })

  }

}
