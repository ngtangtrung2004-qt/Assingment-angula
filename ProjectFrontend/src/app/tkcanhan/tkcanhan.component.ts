import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { UserService } from '../api/user/user.service';
import { jwtDecode } from 'jwt-decode';
import { TaskcuatoiComponent } from '../taskcuatoi/taskcuatoi.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tkcanhan',
  standalone: true,
  imports: [TaskcuatoiComponent,RouterLink],
  templateUrl: './tkcanhan.component.html',
  styleUrl: './tkcanhan.component.css'
})
export class TkcanhanComponent implements OnInit{
  constructor(private UserSrv:UserService){}
  token:any;
  user:any;
  status:any;

  // @Output() idUser1 = new EventEmitter<any>
  userid:any;
  ngOnInit(): void {
    this.token=localStorage.getItem('token');
    if(this.token){
      this.user=jwtDecode(this.token);
      console.log(this.user);
      this.userid=this.user.id
      console.log(this.user.status);
       
    }

    this.UserSrv.getoneuser( this.userid).subscribe((data:any)=>{
      this.user=data.data;
      if(this.user.status == 1){
        this.status='on';
   }else{
     this.status='off';
   }
    })
 
  }


  
 

}
