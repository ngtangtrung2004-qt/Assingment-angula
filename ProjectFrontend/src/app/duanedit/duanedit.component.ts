import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuanApiService } from '../api/duan/duan-api.service';
import { Duan } from '../interface/duan';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../api/user/user.service';
import { User } from '../interface/user';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-duanedit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './duanedit.component.html',
  styleUrl: './duanedit.component.css'
})
export class DuaneditComponent implements OnInit {
  id: any;
  constructor(private duansrv: DuanApiService,
    private route: ActivatedRoute,
    private Nvsrv: UserService,
    private toastr: ToastrService,
    private route1: Router) {
  }
  // oneDuan:any;
  duan: Duan = <Duan>{};
  nhanvien: User[] = [];
  router_next:any;

  ngOnInit(): void {
    // console.log('hekiiiiiii');
    this.id = this.route.snapshot.params['id'];
    this.duansrv.getOne(this.id).subscribe((response: any) => {
      this.duan = response.data.rows[0] as Duan;
      console.log(this.duan);
    }
    )

    this.Nvsrv.getAll().subscribe((responseNv: any) => {
      this.nhanvien = responseNv.data;
    })
  }

  onSubmit() {
    this.duansrv.editDuan(this.duan, this.duan.id).subscribe((responseCreate: any) => {
      console.log(responseCreate);
      this.toastr.success('Sửa Dự Án Thành Công😘🤩🙂', '', {
        timeOut: 4000,
      });
      
this.router_next=this.route1;
      setTimeout(()=>{
        this.router_next.navigate(['/listduan']);
      },4000)
      

    })
  }

}

