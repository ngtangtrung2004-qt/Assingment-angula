import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user/user.service';
import { User } from '../interface/user';
import { SidebarrightComponent } from '../sidebarright/sidebarright.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-nv-list',
  standalone: true,
  imports: [SidebarrightComponent,CommonModule],
  templateUrl: './nv-list.component.html',
  styleUrl: './nv-list.component.css'
})
export class NvListComponent implements OnInit{
constructor(private httpServiceUser:UserService){}
  ngOnInit(): void {
    
this.loadListTask();

  }


  //
  listNv:User[]=[];
  loading:boolean=true;
  err:any;
  loadListTask(){
    this.loading=true;
    this.httpServiceUser.getAll().subscribe((response: any)=>{
      this.loading=false;
      this.listNv=response.data;
      // console.log(this.listNv);
    },(error)=>{
      this.err=error;
    })
  }

}
