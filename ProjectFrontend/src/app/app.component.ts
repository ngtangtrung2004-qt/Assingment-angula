import { Component, OnChanges, OnInit, SimpleChanges, Inject, DoCheck,Input } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCoffee, faList, faUser, faFileLines, faGear, faDatabase, faBorderAll, faArrowDownWideShort, faSortDown, faBell, faMagnifyingGlass,
  faCaretDown, faRocket} from '@fortawesome/free-solid-svg-icons';
import { JwtHelperService } from "@auth0/angular-jwt";
import { CommonModule } from '@angular/common';
import { jwtDecode } from "jwt-decode";


//import các component cố định
import { SidebarComponent } from './sidebar/sidebar.component';
// import { HomeComponent } from './home/home.component';
import { DuancreateComponent } from './duancreate/duancreate.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, RouterLink, FontAwesomeModule, FormsModule, SidebarComponent, DuancreateComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnChanges,DoCheck {
  tokenPayload:any;
  token:any;
  iduserTQ:any;
  ngDoCheck(): void {
    if (localStorage.getItem('token')) {
      const jwtHelper = new JwtHelperService();
      if (!jwtHelper.isTokenExpired(localStorage.getItem('token'))) {
        this.showdkdn = false;
this.token=localStorage.getItem('token');
        this.tokenPayload = jwtDecode(this.token);
        
      } else {
        this.showdkdn = true;
      }
    }
  }

  title = 'Project';
  faMagnifyingGlass = faMagnifyingGlass;
  faCaretDown = faCaretDown;
  faCoffee = faCoffee;
  faList = faList;
  faUser = faUser;
  faFileLines = faFileLines;
  faGear = faGear;
  faDatabase = faDatabase;
  faBorderAll = faBorderAll;
  faArrowDownWideShort = faArrowDownWideShort;
  faSortDown = faSortDown;
  faBell = faBell;
  faRocket = faRocket;
  showdkdn: boolean = true;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('helo');
    if (localStorage.getItem('token')) {
      const jwtHelper = new JwtHelperService();
      if (!jwtHelper.isTokenExpired(localStorage.getItem('token'))) {
        this.showdkdn = false;
      } else {
        this.showdkdn = true;
      }
    }
  }


  ngOnInit(): void {

  }
  // truyền dữ liệu 

 
 

}
