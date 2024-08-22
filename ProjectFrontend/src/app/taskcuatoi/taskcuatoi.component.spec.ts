import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcuatoiComponent } from './taskcuatoi.component';

describe('TaskcuatoiComponent', () => {
  let component: TaskcuatoiComponent;
  let fixture: ComponentFixture<TaskcuatoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskcuatoiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskcuatoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
