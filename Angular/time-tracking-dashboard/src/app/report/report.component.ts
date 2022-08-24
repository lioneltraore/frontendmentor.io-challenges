import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @Output() changePeriod = new EventEmitter();

  periods: string[] = ["Daily", "Weekly", "Monthly"];
  activePeriod: string = "Daily";

  constructor() { }

  ngOnInit(): void {
  }

  setActivePeriod(period: string): void {
    this.activePeriod = period;
    this.changePeriod.emit(this.activePeriod);
  }

}
