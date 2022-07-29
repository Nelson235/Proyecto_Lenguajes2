import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceAddComponent } from './space-add.component';

describe('SpaceAddComponent', () => {
  let component: SpaceAddComponent;
  let fixture: ComponentFixture<SpaceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
