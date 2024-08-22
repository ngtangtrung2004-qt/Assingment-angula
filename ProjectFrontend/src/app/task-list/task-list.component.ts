import { Component } from '@angular/core';
import { SidebarrightComponent } from '../sidebarright/sidebarright.component';
import { RouterModule } from '@angular/router';
import { TaskApiService } from '../api/task/task-api.service';
import { Task } from '../interface/task';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [SidebarrightComponent,RouterModule,CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  constructor(private tasksrv:TaskApiService){}

  task?:Task[]=[];
  loading:boolean=true;
  err:any;

  ngOnInit(): void {
    this.loadListTask()
  }

  loadListTask(){
    this.loading=true;
    this.tasksrv.getAll().subscribe((response: any)=>{
      this.loading=false;
      this.task=response.data;
      
      // console.log(this.task);
    },(error)=>{
      this.loading=false;
      this.err=error;
    })
  }


  xoa(id:any){
    this.tasksrv.delete(id).subscribe((response: any)=>{
      alert('Xóa thành công🤞');
      this.loadListTask();
  })
}
}

