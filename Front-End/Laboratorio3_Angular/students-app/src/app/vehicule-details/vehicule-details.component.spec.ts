import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeDetailsComponent } from './vehicule-details.component';

describe('VehiculeDetailsComponent', () => {
  let component: VehiculeDetailsComponent;
  let fixture: ComponentFixture<VehiculeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
