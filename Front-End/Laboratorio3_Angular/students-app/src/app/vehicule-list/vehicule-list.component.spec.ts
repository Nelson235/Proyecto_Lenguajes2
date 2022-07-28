import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeListComponent } from './vehicule-list.component';

describe('VehiculeListComponent', () => {
  let component: VehiculeListComponent;
  let fixture: ComponentFixture<VehiculeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
