import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentOperationComponent } from './content-operation.component';

describe('ContentOperationComponent', () => {
  let component: ContentOperationComponent;
  let fixture: ComponentFixture<ContentOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
