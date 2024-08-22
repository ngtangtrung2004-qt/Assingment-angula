import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../interface/task';
@Injectable({
  providedIn: 'root'
})
export class TaskApiService {
  url = `http://localhost:3000/tasks/`;
  constructor(private httpServiceTask: HttpClient) { }

  getAll() {
    return this.httpServiceTask.get(this.url);
  }
  getOne(id:any){
    return this.httpServiceTask.get(this.url+'/id/'+id);
  }
  getTaskofUser(iduser:any){
    return this.httpServiceTask.get(this.url + iduser);
  }
  createTask(task: Task) {
    return this.httpServiceTask.post(this.url, task);
  }
  editTask(task: Task, id: any) {
    return this.httpServiceTask.put(this.url + id, task);
  }
  delete(id: any) {
    return this.httpServiceTask.delete(this.url + id);
  }
}
