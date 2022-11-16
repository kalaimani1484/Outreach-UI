import { Component, OnInit } from '@angular/core';
import { dashboardDetails } from '../Interfaces/dashboardDetails';
import { DashboardService } from '../services/dashboard.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dashboardData : dashboardDetails;

  constructor(public _router: Router,
    public _dashboardService: DashboardService) { }

  ngOnInit() {
    this.GetDashboardData();
  }

  GetDashboardData(){
    this._dashboardService.DashboardData().subscribe(data => {
      this.dashboardData = data;
    },
    err => {
     console.log(err);    
    });
  }
}