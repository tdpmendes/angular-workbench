import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfMakeExampleComponent } from './pdf-make-example.component';

describe('PdfMakeExampleComponent', () => {
  let component: PdfMakeExampleComponent;
  let fixture: ComponentFixture<PdfMakeExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfMakeExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdfMakeExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
