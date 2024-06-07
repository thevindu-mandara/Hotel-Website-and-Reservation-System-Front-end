import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TulipComponent } from './tulip.component';

describe('TulipComponent', () => {
  let component: TulipComponent;
  let fixture: ComponentFixture<TulipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TulipComponent]
    });
    fixture = TestBed.createComponent(TulipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
