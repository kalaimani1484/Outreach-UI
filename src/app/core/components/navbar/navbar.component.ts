import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { LoginService } from '../../../authentication/services/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showNavBar : boolean;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  isAdminUser:boolean = false;

  constructor(public _router: Router,
    public _loginService: LoginService) { }

  ngOnInit() {
    //this.CheckLoginState();
    this._loginService.getHeaderValue().subscribe((value) => {
      this.showNavBar = value;
    });
    this._loginService.getAdminUserValue().subscribe((value) => {
      if(value != null){
      if(value.role == "admin"){
        this.isAdminUser = true;
      }
      else{
        this.isAdminUser = false;
      }}
    });
    
  }
 public CheckLoginState(){
    this._loginService.IsLoggedIn
    if (this._loginService.login()){
      this.showNavBar = true;
    }
    else{
      this.showNavBar = false;
    }
  }
  Logout(){
    this._loginService.logout();
    this._router.navigate(['login']);
    }

  
    mouseenter() {
      if (!this.isExpanded) {
        this.isShowing = true;
      }
    }
  
    mouseleave() {
      if (!this.isExpanded) {
        this.isShowing = false;
      }
    }
}
