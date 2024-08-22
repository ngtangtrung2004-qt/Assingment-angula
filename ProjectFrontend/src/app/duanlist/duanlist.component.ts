import { Component, OnInit } from '@angular/core';
import { SidebarrightComponent } from '../sidebarright/sidebarright.component';
import { RouterModule } from '@angular/router';
import { DuancreateComponent } from '../duancreate/duancreate.component';
import { CommonModule } from '@angular/common';
// su dung api 
// import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DuanApiService } from '../api/duan/duan-api.service';
// su dung interface 
import { Duan } from '../interface/duan';
import { DuAnResponse } from '../interface/duanresponse';
import { get } from 'node:http';
//su dung toastr
import { ToastrService } from 'ngx-toastr';
//
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-duanlist',
  standalone: true,
  imports: [SidebarrightComponent, RouterModule, DuancreateComponent, CommonModule,NgxPaginationModule],
  templateUrl: './duanlist.component.html',
  styleUrl: './duanlist.component.css'
})
export class DuanlistComponent implements OnInit {

  constructor(private duansrv: DuanApiService,
              private toastr:ToastrService,) {}

  duan?: Duan[] = [];
  loading: boolean = true;
  err: any;
  page:number=1;


  ngOnInit(): void {
    this.loadListDuan();
  }

  loadListDuan() {
    this.loading = true;
    this.duansrv.getAll().subscribe((response: DuAnResponse) => {
      this.loading = false;
      this.duan = response.data;
    }, (error) => {
      this.loading = false;
      this.err = error;
    })
  }


  ///

  id: any;
  loading1:boolean=false;
  btn:any;
  delete(i: any) {
    this.id = i;
    this.loading1=false;
    this.duansrv.delete(this.id).subscribe((response1:any)=>{
      this.loading = false;
      this.loading1=true;
    
      setTimeout(()=>{
        this.toastr.success('🎉😊Xóa Dự Án Thành Công🙂🎉','',{timeOut:4000})
        this.loadListDuan();
        this.loading1=false;
      },4000)
     
    })

  }


}
