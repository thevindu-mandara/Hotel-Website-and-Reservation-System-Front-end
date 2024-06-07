import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunettaComponent } from './lunetta.component';

describe('LunettaComponent', () => {
  let component: LunettaComponent;
  let fixture: ComponentFixture<LunettaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LunettaComponent]
    });
    fixture = TestBed.createComponent(LunettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
