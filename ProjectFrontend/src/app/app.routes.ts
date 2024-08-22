import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuanlyduanComponent } from './quanlyduan/quanlyduan.component';
import { DuanlistComponent } from './duanlist/duanlist.component';
import { DuancreateComponent } from './duancreate/duancreate.component';
import { DuaneditComponent } from './duanedit/duanedit.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { NvListComponent } from './nv-list/nv-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { canActivateTeam } from './authentication/auth';
import { TkcanhanComponent } from './tkcanhan/tkcanhan.component';
import { EdituserComponent } from './edituser/edituser.component';



export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'quanlychung',component:QuanlyduanComponent},
    //duancanActivate:[canActivateTeam],data:{role:1}
    {path:'listduan', component:DuanlistComponent},
    {path:'createduan', component:DuancreateComponent},
    {path:'editduan/:id', component:DuaneditComponent},
    //task
    {path:'listtask', component:TaskListComponent},
    {path:'createtask', component:TaskCreateComponent},
    {path:'edittask/:id', component:TaskEditComponent},
    //user
    {path:'listnv', component:NvListComponent},
    {path:'edit/:id', component:EdituserComponent},
    //,canActivate: [canActivateTeam]danh cho tk
    {path:'tkcanhan',component:TkcanhanComponent,canActivate: [canActivateTeam]},

    //login,register
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent },
];
