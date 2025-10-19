import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ICategory } from '../../model/categoria.mode';
import { CategoryService } from '../../services/Category';

@Component({
  selector: 'app-categorias-list',
  imports: [MatTableModule],
  templateUrl: './categorias-list.html',
  styleUrl: './categorias-list.css'
})
export class CategoriasList {

  private _categoryService: CategoryService = inject(CategoryService);

  displayedColumns: string[] = ['idCategory', 'name', 'description'];
  categories: ICategory[] = []

  constructor() {

  }

  ngOnInit(): void {
    this.loadLaboratories();
  }

  loadLaboratories() {
    this._categoryService.getList().subscribe({
      next: (data) => {
        this.categories = data;
      }
    })
  }

}
