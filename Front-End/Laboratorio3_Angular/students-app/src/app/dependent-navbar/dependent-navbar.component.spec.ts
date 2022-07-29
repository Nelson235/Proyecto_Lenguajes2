import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentNavbarComponent } from './dependent-navbar.component';

describe('DependentNavbarComponent', () => {
  let component: DependentNavbarComponent;
  let fixture: ComponentFixture<DependentNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependentNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
