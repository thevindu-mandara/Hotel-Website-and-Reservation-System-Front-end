import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidebarDashComponent } from './admin-sidebar-dash.component';

describe('AdminSidebarDashComponent', () => {
  let component: AdminSidebarDashComponent;
  let fixture: ComponentFixture<AdminSidebarDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminSidebarDashComponent]
    });
    fixture = TestBed.createComponent(AdminSidebarDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
