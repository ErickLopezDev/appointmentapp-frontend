import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliasList } from './familias-list';

describe('FamiliasList', () => {
  let component: FamiliasList;
  let fixture: ComponentFixture<FamiliasList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FamiliasList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliasList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
