import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

import { ReportService } from '../../services/reports.service';
import { ReportData,eventData } from '../../Interfaces/reportdata';
import { strictEqual } from 'assert';


@Component({
  selector: 'app-eventreport',
  templateUrl: './eventreport.component.html',
  styleUrls: ['./eventreport.component.css']
})
export class EventreportComponent implements OnInit {
  //events : ReportData[];
  report : ReportData;
  eventslist : eventData[];
  displayedColumns: string[] = ['eventId','benificiaryName','baseLocation', 'councilName','project','status'];
  events: MatTableDataSource<eventData>;
  successmsg: string;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public _router: Router,
    public _reportService: ReportService)  { }

  ngOnInit() {
    this.getEventsList();
  }

  getEventsList(){
    this.successmsg = "";
    this._reportService.getAllEvents().subscribe(data => {
      this.eventslist = data;
      this.events = new MatTableDataSource(data);
      this.events.paginator = this.paginator;
      this.events.sort = this.sort;
    },
    err => {
     console.log(err);    
    });
  }

  sendEventReport(receipiant){
    this.successmsg = "";
    this.report = new ReportData();
    this.report.to = receipiant.value;
    this.report.events = this.eventslist;
    
    this._reportService.SendReports(this.report).subscribe(data => {
      this.successmsg = "Report sent successfully";
    },
    err => {
      this.successmsg = "Unable to send the report";
     console.log(JSON.stringify(err));    
    });
  }
}
