import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  periods: string[] = ["Daily", "Weekly", "Monthly"];
  activePeriod: string = "Daily";

  constructor() { }

  ngOnInit(): void {
  }

  setActivePeriod(period: string): void {
    this.activePeriod = period;
  }

}
