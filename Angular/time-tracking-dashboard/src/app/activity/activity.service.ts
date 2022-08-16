import { IActivity } from './activity.model';
import { Injectable } from '@angular/core';
import { ACTIVITIES } from './mock-activities';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }

  getActivities(): IActivity[] {
    return ACTIVITIES;
  }
}
