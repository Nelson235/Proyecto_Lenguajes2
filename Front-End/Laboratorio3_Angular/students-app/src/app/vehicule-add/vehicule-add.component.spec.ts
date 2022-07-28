import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeAddComponent } from './vehicule-add.component';

describe('VehiculeAddComponent', () => {
  let component: VehiculeAddComponent;
  let fixture: ComponentFixture<VehiculeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
