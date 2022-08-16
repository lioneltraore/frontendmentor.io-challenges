import { ActivityService } from './activity/activity.service';
import { IActivity } from './activity/activity.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'time-tracking-dashboard';
  activities: IActivity[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.activities = this.activityService.getActivities();
  }



}
