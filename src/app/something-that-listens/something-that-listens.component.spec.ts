import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingThatListensComponent } from './something-that-listens.component';

describe('SomethingThatListensComponent', () => {
  let component: SomethingThatListensComponent;
  let fixture: ComponentFixture<SomethingThatListensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SomethingThatListensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SomethingThatListensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
