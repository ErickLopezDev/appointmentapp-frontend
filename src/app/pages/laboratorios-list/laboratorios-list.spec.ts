import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoriosList } from './laboratorios-list';

describe('LaboratoriosList', () => {
  let component: LaboratoriosList;
  let fixture: ComponentFixture<LaboratoriosList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoriosList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoriosList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
