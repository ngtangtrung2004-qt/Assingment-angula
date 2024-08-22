import { Component } from '@angular/core';
import { NgForm,FormsModule,NgModel } from '@angular/forms';
import { UserService } from '../api/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
constructor(private UserSrv:UserService,
            private route:Router,
) {}



  onSubmit(formregister:NgForm){
    console.log(formregister.value);
    this.UserSrv.createUser(formregister.value).subscribe((response:any)=>{
      console.log(response);
      this.route.navigate(['/login']);

    })
  }
}
