import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Duan } from '../../interface/duan';
@Injectable({
  providedIn: 'root'
})
export class DuanApiService {
  url=`http://localhost:3000/duans/`;
  constructor(private httpServiceDuan:HttpClient) {}

  getAll(){
    let token=localStorage.getItem('token');
    return this.httpServiceDuan.get(this.url,{headers: {authorization:`Bearer ${token}`}});
  }
  getOne(id:any){
    return this.httpServiceDuan.get(this.url+'/id/'+id);
  }
  delete(id:any){
return this.httpServiceDuan.delete(this.url+id);
  }
  createDuan(duan:Duan){
return this.httpServiceDuan.post(this.url,duan);
  }
  getduanofleader(leader:any){
    return this.httpServiceDuan.get(this.url+leader);
  }
  editDuan(duan:Duan,id:any){
    return this.httpServiceDuan.put(this.url+id,duan);
  }
}
