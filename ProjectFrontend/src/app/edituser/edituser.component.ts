import { Component } from '@angular/core';
import { UserService } from '../api/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interface/user';
import { NgForm,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edituser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edituser.component.html',
  styleUrl: './edituser.component.css'
})
export class EdituserComponent {
  constructor(private http:UserService,
              private route1:ActivatedRoute,
              private route:Router){}
  id:any;
  user:User={};
  err:any;

  ngOnInit(): void {
    this.id=this.route1.snapshot.params['id'];
    this.http.getoneuser(this.id).subscribe((data:any)=>{
           this.user=data.data;
           console.log(this.user);
           
    })
}
       
          


onSubmit(){
  this.http.editUser(this.user,this.id).subscribe((data1:any)=>{
    this.route.navigate(['/tkcanhan'])
    },(error)=>{
      this.err=error;
    })

}
}
