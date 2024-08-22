import { Component } from '@angular/core';
import { NgForm, NgModel, FormsModule } from '@angular/forms';
import { UserService } from '../api/user/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private UserSrv: UserService,
              private route:Router,) {}


  onSubmit(formlogin: NgForm) {  // xử lý Đăng Nhập
    console.log(formlogin.value);
    this.UserSrv.login(formlogin.value).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem('token', response.accesToken);
      alert('Đăng Nhập Thành Công 🎉');
      this.route.navigate(['/home']);
    })
  }
}
