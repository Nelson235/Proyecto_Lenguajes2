import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateDetailsComponent } from './rate-details.component';

describe('RateDetailsComponent', () => {
  let component: RateDetailsComponent;
  let fixture: ComponentFixture<RateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
