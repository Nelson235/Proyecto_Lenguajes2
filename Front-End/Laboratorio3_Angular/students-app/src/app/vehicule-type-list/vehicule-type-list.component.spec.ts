import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeTypeListComponent } from './vehicule-type-list.component';

describe('VehiculeTypeListComponent', () => {
  let component: VehiculeTypeListComponent;
  let fixture: ComponentFixture<VehiculeTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculeTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
