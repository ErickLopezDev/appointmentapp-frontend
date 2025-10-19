import { Component, inject } from '@angular/core';
import { FamilyService } from '../../services/Family';
import { IFamily } from '../../model/family.model';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-familias-list',
  imports: [MatTableModule],
  templateUrl: './familias-list.html',
  styleUrl: './familias-list.css'
})
export class FamiliasList {
  private _familyService: FamilyService = inject(FamilyService);

  displayedColumns: string[] = ['idFamily', 'name', 'description'];
  families: IFamily[] = []

  constructor() {

  }

  ngOnInit(): void {
    this.loadLaboratories();
  }

  loadLaboratories() {
    this._familyService.getList().subscribe({
      next: (data) => {
        this.families = data;
      }
    })
  }
}
