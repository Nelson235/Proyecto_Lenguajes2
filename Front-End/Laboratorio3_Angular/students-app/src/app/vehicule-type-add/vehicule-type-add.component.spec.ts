import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeTypeAddComponent } from './vehicule-type-add.component';

describe('VehiculeTypeAddComponent', () => {
  let component: VehiculeTypeAddComponent;
  let fixture: ComponentFixture<VehiculeTypeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeTypeAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculeTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
