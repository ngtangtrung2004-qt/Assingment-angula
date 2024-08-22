import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TkcanhanComponent } from './tkcanhan.component';

describe('TkcanhanComponent', () => {
  let component: TkcanhanComponent;
  let fixture: ComponentFixture<TkcanhanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TkcanhanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TkcanhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
