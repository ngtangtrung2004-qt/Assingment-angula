import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuaneditComponent } from './duanedit.component';

describe('DuaneditComponent', () => {
  let component: DuaneditComponent;
  let fixture: ComponentFixture<DuaneditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuaneditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuaneditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
