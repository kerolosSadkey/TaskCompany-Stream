import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forntEndDoucoment';

  isSideNavCollapsed:boolean= false;
  screenwidth=0
  onToggleSideNav(data:SideNavToggle):void{
         this.isSideNavCollapsed=data.collapsed;
         this.screenwidth=data.screenWidth;
  }
}
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
