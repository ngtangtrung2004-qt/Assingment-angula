import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuancuanhomComponent } from './duancuanhom.component';

describe('DuancuanhomComponent', () => {
  let component: DuancuanhomComponent;
  let fixture: ComponentFixture<DuancuanhomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuancuanhomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuancuanhomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
