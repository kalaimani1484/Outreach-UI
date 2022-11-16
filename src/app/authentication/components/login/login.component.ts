import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlertsService, AlertType } from '@jaspero/ng-alerts';

import { LoginService } from '../../services/login.service';
import {AlertOptions} from '../../Classes/AlertOptions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginRForm: FormGroup;
  AlertOptions: AlertOptions = new AlertOptions();
  isLoading: boolean = false;
  
  constructor(public _router: Router,
    public _loginService: LoginService,
    public _formBuilder: FormBuilder,
    //public _appService: AppService,
    public _alert: AlertsService,
   ) { }

  ngOnInit() {
    this.CheckLoginState();
    this.CreateFromGroup();
  }

  public CreateFromGroup() {
    this.LoginRForm = this._formBuilder.group({
      UserName: [null, Validators.required],
      Password: [null, Validators.required]
    });
  }
  public CheckLoginState(){
    if (this._loginService.login()){
      console.log(this._loginService.IsLoggedIn);
      this._router.navigate(['Dashboard']);
    }
  }
  public Login(UserDetails, form) {
    if (form.valid) {
        this.isLoading = true;  
      
        this._loginService.UserName = UserDetails.UserName;
        this._loginService.authenticate(UserDetails.UserName, UserDetails.Password).subscribe(authentication => {
          var currDate = new Date();
          this._loginService.IsLoggedIn = true;
          this._loginService.Authentication_Details = authentication;
          this._loginService.SetLoalStorageValue('currentUser',  JSON.stringify(authentication));
          this._loginService.SetLoalStorageValue('access_token', this._loginService.Authentication_Details.access_token);
          this._loginService.SetLoalStorageValue('Id', this._loginService.Authentication_Details.Id);
          this._loginService.SetLoalStorageValue('expires', this._loginService.Authentication_Details.expires);
          this._loginService.SetLoalStorageValue('role', this._loginService.Authentication_Details.role);
          this._loginService.currentUserSubject.next(authentication);
          this._router.navigate(['Dashboard']);
          this.isLoading = false;
        },
          err => {
            if (err != null && err.status == 404) {
              this._alert.create('error', 'Invalid username or password.', this.AlertOptions);
            }
            else
              this._alert.create('error', 'Error has been occurred. Please try again.', this.AlertOptions);
            this.isLoading = false;
          });
      
    }
  }

}
