import { Component, inject } from '@angular/core';
import { LaboratoryService } from '../../services/Laboratory';
import { ILaboratory } from '../../model/laboratory.model';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-laboratorios-list',
  imports: [MatTableModule, CommonModule],
  templateUrl: './laboratorios-list.html',
  styleUrl: './laboratorios-list.css'
})
export class LaboratoriosList {

  private _laboratoryService: LaboratoryService = inject(LaboratoryService);

  displayedColumns: string[] = ['idLaboratory', 'name', 'address', 'phone', 'email'];
  laboratories: ILaboratory[] = []

  constructor() {

  }

  ngOnInit(): void {
    this.loadLaboratories();
  }

  loadLaboratories() {
    this._laboratoryService.getList().subscribe({
      next: (data) => {
        this.laboratories = data;
      }
    })
  }
}
