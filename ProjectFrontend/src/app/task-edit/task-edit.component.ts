import { Component, OnInit } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { User } from '../interface/user';
import { Task } from '../interface/task';
import { Duan } from '../interface/duan';
import { TaskApiService } from '../api/task/task-api.service';
import { DuanApiService } from '../api/duan/duan-api.service';
import { UserService } from '../api/user/user.service';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.css'
})
export class TaskEditComponent implements OnInit {

constructor(private route1: ActivatedRoute,
            private taskSrv:TaskApiService,
            private UserSrv:UserService,
            private DuanSrv:DuanApiService,
            private toastr:ToastrService,
            private route:Router){}


            duan:Duan[]=[];
            nhanvien:User[]=[];
            task:Task={};
            err:any;
            id:any;
  ngOnInit(): void {
  
      this.id=this.route1.snapshot.params['id'];
      console.log(this.id);
      this.taskSrv.getOne(this.id).subscribe((dataTask:any)=>{
             this.task=dataTask.data;
             console.log(this.task);
      })

      this.UserSrv.getAll().subscribe((data1:any)=>{
      this.nhanvien=data1.data as User[] ;
          })
      
          this.DuanSrv.getAll().subscribe((dataduan:any)=>{
      this.duan=dataduan.data as Duan[];
          })
  }
         
            


  onSubmit(){
    this.taskSrv.editTask(this.task,this.id).subscribe((dataedittask:any)=>{
      this.toastr.success('Sửa Task Thành Công🎉🤩🎊','',{
        timeOut:4000,
       })
       setTimeout(()=>{
      this.route.navigate(['/listtask'])
       },2000)
      },(error)=>{
        this.err=error;
      })

  }
}
