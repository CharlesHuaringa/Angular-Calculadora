import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCalculatorComponent } from './content-calculator.component';

describe('ContentCalculatorComponent', () => {
  let component: ContentCalculatorComponent;
  let fixture: ComponentFixture<ContentCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
