import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DuanApiService } from '../api/duan/duan-api.service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, NgForm } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Duan } from '../interface/duan';
import { UserService } from '../api/user/user.service';
import { User } from '../interface/user';
import { ToastrService } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-duancreate',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule,FontAwesomeModule],
  templateUrl: './duancreate.component.html',
  styleUrl: './duancreate.component.css'
})
export class DuancreateComponent implements OnInit {
  constructor(private postDuan: DuanApiService,
    private httpServiceUser: UserService,
    private toastr: ToastrService,
    private route: Router) { }
    faTriangleExclamation=faTriangleExclamation
   



  DuanForm = new FormGroup({
    'ten_du_an': new FormControl(null,[Validators.required]),
    'so_thanh_vien': new FormControl(null,[Validators.required]),
    'thanhvien': new FormControl(null,[Validators.required]),
    'chiphi': new FormControl(null,[Validators.required]),
    'leader': new FormControl(null,[Validators.required]),
    'ngaytao': new FormControl(null,[Validators.required]),
    'ngayhethan': new FormControl(null,[Validators.required]),
  })

  duanpost?:any;
  thanhvien?: User[] = [];
  err: any;


  ngOnInit(): void {
    this.httpServiceUser.getAll().subscribe((responseNV: any) => {
      console.log(responseNV);
      this.thanhvien = responseNV.data;
    })
  }



  onSubmit() {
    this.duanpost = this.DuanForm.value;
    console.log(this.DuanForm.value);
    this.postDuan.createDuan(this.duanpost as Duan).subscribe((response: any) => {
      
      this.toastr.success('Tạo Dự Án Thành Công😘🤩🙂','', {
        timeOut: 4000,
      });
      // console.log(response?.message);
      this.route.navigate(['/listduan'])
    }, (error) => {
      this.err = error;
    })
  }
}
