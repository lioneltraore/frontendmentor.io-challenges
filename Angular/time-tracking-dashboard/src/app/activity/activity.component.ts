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

  colors = {
    work: "bg-desaturated-red"
  };

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
  }

  getColor(title: string) {
    return this.activityService.getColor(title);
  }

  getImage(title: string): string {
    return this.activityService.getImage(title);
  }

}
