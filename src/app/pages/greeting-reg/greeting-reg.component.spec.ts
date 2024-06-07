import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingRegComponent } from './greeting-reg.component';

describe('GreetingRegComponent', () => {
  let component: GreetingRegComponent;
  let fixture: ComponentFixture<GreetingRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreetingRegComponent]
    });
    fixture = TestBed.createComponent(GreetingRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
