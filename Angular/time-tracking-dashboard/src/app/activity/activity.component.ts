import { ActivityService } from './activity.service';
import { IActivity } from './activity.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  @Input() activity!: IActivity;
  @Input() period!: string;

  current: string = "";
  previous: string = "";

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.period === "Daily") {
      this.current = this.activity.timeframes.daily.current + "hrs";
      this.previous = "Yesterday - " + this.activity.timeframes.daily.previous + "hrs";
    }

    if(this.period === "Weekly") {
      this.current = this.activity.timeframes.weekly.current + "hrs";
      this.previous = "Last Week - " + this.activity.timeframes.weekly.previous + "hrs";
    }

    if(this.period === "Monthly") {
      this.current = this.activity.timeframes.monthly.current + "hrs";
      this.previous = "Last Month - " + this.activity.timeframes.monthly.previous + "hrs";
    }
  }

  getColor(title: string) {
    return this.activityService.getColor(title);
  }

  getImage(title: string): string {
    return this.activityService.getImage(title);
  }

}
