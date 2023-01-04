import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentFechaComponent } from './content-fecha.component';

describe('ContentFechaComponent', () => {
  let component: ContentFechaComponent;
  let fixture: ComponentFixture<ContentFechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentFechaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
