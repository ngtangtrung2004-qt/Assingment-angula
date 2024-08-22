import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule, NgForm } from '@angular/forms';
import { User } from '../interface/user';
import { Task } from '../interface/task';
import { Duan } from '../interface/duan';
import { TaskApiService } from '../api/task/task-api.service';
import { DuanApiService } from '../api/duan/duan-api.service';
import { UserService } from '../api/user/user.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task-create',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent implements OnInit{
constructor(private taskSrv:TaskApiService,
            private UserSrv:UserService,
            private DuanSrv:DuanApiService,
            private toastr:ToastrService,
            private route:Router){}

duan:Duan[]=[];
nhanvien:User[]=[];
task:Task={};
err:any;


  ngOnInit(): void {
    this.UserSrv.getAll().subscribe((data1:any)=>{
this.nhanvien=data1.data as User[] ;
    })

    this.DuanSrv.getAll().subscribe((dataduan:any)=>{
this.duan=dataduan.data as Duan[];
    })
  }


// Xử lý dữ liệu cùng form 

TaskForm=new FormGroup({
  'ten_task':new FormControl(), 
  'id_du_an':new FormControl() ,
  'nhan_vien_id':new FormControl(), 
  'mota':new FormControl(),
  'tinh_trang':new FormControl(), 
  'priority':new FormControl()
})

onSubmit(){
  // console.log("object");
 this.task= this.TaskForm.value;
  console.log(this.TaskForm.value);
  this.taskSrv.createTask(this.task).subscribe((responseTask)=>{
   this.toastr.success('Tạo Task Thành Công🎉🤩🎊','',{
    timeOut:4000,
   })
   setTimeout(()=>{
  this.route.navigate(['/listtask'])
   },4000)
  },(error)=>{
    this.err=error;
  })
}


}
