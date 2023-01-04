import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCabeceraComponent } from './content-cabecera.component';

describe('ContentCabeceraComponent', () => {
  let component: ContentCabeceraComponent;
  let fixture: ComponentFixture<ContentCabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentCabeceraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
