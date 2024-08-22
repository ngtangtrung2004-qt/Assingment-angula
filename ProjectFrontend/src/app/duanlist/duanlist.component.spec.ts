import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuanlistComponent } from './duanlist.component';

describe('DuanlistComponent', () => {
  let component: DuanlistComponent;
  let fixture: ComponentFixture<DuanlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuanlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuanlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
