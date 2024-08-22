import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuancreateComponent } from './duancreate.component';

describe('DuancreateComponent', () => {
  let component: DuancreateComponent;
  let fixture: ComponentFixture<DuancreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuancreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuancreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
