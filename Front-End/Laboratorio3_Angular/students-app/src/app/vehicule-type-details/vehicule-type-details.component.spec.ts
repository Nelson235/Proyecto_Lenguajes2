import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeTypeDetailsComponent } from './vehicule-type-details.component';

describe('VehiculeTypeDetailsComponent', () => {
  let component: VehiculeTypeDetailsComponent;
  let fixture: ComponentFixture<VehiculeTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeTypeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculeTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
