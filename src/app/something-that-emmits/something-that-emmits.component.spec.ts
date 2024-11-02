import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingThatEmmitsComponent } from './something-that-emmits.component';

describe('SomethingThatEmmitsComponent', () => {
  let component: SomethingThatEmmitsComponent;
  let fixture: ComponentFixture<SomethingThatEmmitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SomethingThatEmmitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomethingThatEmmitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
