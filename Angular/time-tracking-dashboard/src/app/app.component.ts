import { ActivityService } from './activity/activity.service';
import { IActivity } from './activity/activity.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activities: IActivity[] = [];
  sampleActivity!: IActivity;

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.activities = this.activityService.getActivities();
    this.sampleActivity = this.activities[0];
  }



}
