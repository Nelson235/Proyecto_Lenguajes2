import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateAddComponent } from './rate-add.component';

describe('RateAddComponent', () => {
  let component: RateAddComponent;
  let fixture: ComponentFixture<RateAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
