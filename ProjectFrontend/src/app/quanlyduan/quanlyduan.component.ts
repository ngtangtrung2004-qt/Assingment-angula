import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuanApiService } from '../api/duan/duan-api.service';
import { Duan } from '../interface/duan';
import { JwtHelperService } from "@auth0/angular-jwt";
import { jwtDecode } from "jwt-decode";
import { DetailqlduanComponent } from '../detailqlduan/detailqlduan.component';

@Component({
  selector: 'app-quanlyduan',
  standalone: true,
  imports: [CommonModule,DetailqlduanComponent],
  templateUrl: './quanlyduan.component.html',
  styleUrl: './quanlyduan.component.css'
})
export class QuanlyduanComponent implements OnInit {
  constructor(private DuanSrv:DuanApiService){}
  idofUser: any;
  token:any;
  tokenPayload:any;
  listduanofleader:any;
  ngOnInit(): void {

    if (localStorage.getItem('token')) {
      const jwtHelper = new JwtHelperService();
      if (!jwtHelper.isTokenExpired(localStorage.getItem('token'))) {

        this.token = localStorage.getItem('token');
        this.tokenPayload = jwtDecode(this.token);
        console.log(  this.tokenPayload );
        this.idofUser=this.tokenPayload.id
      } 
    }

    this.DuanSrv.getduanofleader(this.idofUser).subscribe((data:any)=>{
      console.log(data);  
      this.listduanofleader=data.data.rows;
      console.log(this.listduanofleader);
    })
  }
///
id_du_an:any='';
showduan(id1:any){
 this.id_du_an=id1;
}



}


