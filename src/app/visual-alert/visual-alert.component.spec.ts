import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualAlertComponent } from './visual-alert.component';

describe('VisualAlertComponent', () => {
  let component: VisualAlertComponent;
  let fixture: ComponentFixture<VisualAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
