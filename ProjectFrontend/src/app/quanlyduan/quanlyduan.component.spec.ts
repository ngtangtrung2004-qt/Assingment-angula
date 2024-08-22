import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyduanComponent } from './quanlyduan.component';

describe('QuanlyduanComponent', () => {
  let component: QuanlyduanComponent;
  let fixture: ComponentFixture<QuanlyduanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuanlyduanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuanlyduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
