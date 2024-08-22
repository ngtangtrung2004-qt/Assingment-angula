import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee,faList,faUser,faFileLines,faGear,faDatabase,faBorderAll,faArrowDownWideShort,faSortDown,faBell,faMagnifyingGlass,
  faCaretDown,faRocket
} from '@fortawesome/free-solid-svg-icons';
// muốn sử dụng routerLink phải import RouterModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  faMagnifyingGlass=faMagnifyingGlass;
  faCaretDown=  faCaretDown;
  faCoffee=faCoffee;
  faList=faList;
  faUser=faUser;
  faFileLines=faFileLines;
  faGear=faGear;
  faDatabase=faDatabase;
  faBorderAll=faBorderAll;
  faArrowDownWideShort=faArrowDownWideShort;
  faSortDown=faSortDown;
  faBell=faBell;
  faRocket=faRocket;

}
