import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailqlduanComponent } from './detailqlduan.component';

describe('DetailqlduanComponent', () => {
  let component: DetailqlduanComponent;
  let fixture: ComponentFixture<DetailqlduanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailqlduanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailqlduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
