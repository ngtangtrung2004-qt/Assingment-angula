import { Component,Input, OnInit } from '@angular/core';
import { TaskApiService } from '../api/task/task-api.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-taskcuatoi',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './taskcuatoi.component.html',
  styleUrl: './taskcuatoi.component.css'
})
export class TaskcuatoiComponent  implements OnInit{
  @Input() iduser:any;
  list_task_of_my:any;
  constructor(private TaskSrv:TaskApiService,  private route:Router){}
  ngOnInit(): void {
    console.log(this.iduser);
   this.load_task_ca_nhan();
  }
  load_task_ca_nhan(){
    this.TaskSrv.getTaskofUser(this.iduser).subscribe((data:any)=>{
      console.log(data.data.rows);
         this.list_task_of_my=data.data.rows;
        this.list_task_of_my.forEach( (a:any) => {
         if(a.tinh_trang == 0){
          a.tinh_trang='off';
         }else{
          a.tinh_trang='Đang xử lý';
         }
        });
         if(this.list_task_of_my.status == 0){
          this.list_task_of_my.status =`off`;
         }
     })
  }
  xoatask(id:any){
    this.TaskSrv.delete(id).subscribe((ressponse1)=>{
      console.log('ok');
      this.load_task_ca_nhan();
      
    })
  }
}
