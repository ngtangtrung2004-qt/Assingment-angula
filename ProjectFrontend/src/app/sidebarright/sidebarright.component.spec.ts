import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarrightComponent } from './sidebarright.component';

describe('SidebarrightComponent', () => {
  let component: SidebarrightComponent;
  let fixture: ComponentFixture<SidebarrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarrightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
