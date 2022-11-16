import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { AdminService } from '../../services/admin.service';
import { UserData } from '../../Interfaces/UserData';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  UserList : UserData[];
  UserDetails : UserData;
  showEditPanel : boolean;
  buttonCaption : string;

  constructor(public _router: Router,
    public _adminervice: AdminService) { }

  ngOnInit() {
    this.showEditPanel=false;
    this.getUsersList();
  }

  getUsersList(){
    this._adminervice.getAllUsers().subscribe(data => {
      this.UserList = data;
    },
    err => {
     console.log(err);    
    });
  }

  getUserData(UserId:string){
    this._adminervice.GetUserData(UserId).subscribe(data => {
      this.UserDetails = data;
      this.showEditPanel=true;
      this.buttonCaption = "Update"
    },
    err => {
     console.log(err);    
    });
  }

  AddUpdateUser(User){
      if(this.buttonCaption == "Update"){
        console.log(this.buttonCaption + "update")
        this._adminervice.UpdateUser(User).subscribe(data => {
          this.getUsersList();
          this.showEditPanel=false;
      },
      err => {
      console.log(err);    
      });
    }else{
      User.active =1;
      this._adminervice.SaveNewUser(User).subscribe(data => {
        console.log(this.buttonCaption + "new")
        this.getUsersList();
        this.showEditPanel=false;
      },
      err => {
      console.log(err);    
      });
    } 
    
  }

  SetNewUser(){
    this.UserDetails = new UserData;
    this.showEditPanel=true;
    this.buttonCaption = "New User"
  }

  DeleteUserData(User){
    User.active =0;
    this._adminervice.UpdateUser(User).subscribe(data => {
     this.getUsersList();
    },
    err => {
     console.log(err);    
    });
  }
}
