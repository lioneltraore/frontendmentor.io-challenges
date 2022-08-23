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

  getImage(title: string): string {
    let url = "";

    switch(title) {
      case "Work":
        url = "/assets/images/icon-work.svg";
      break;
      case "Play":
        url = "/assets/images/icon-play.svg";
      break;
      case "Study":
        url = "/assets/images/icon-study.svg";
      break;
      case "Exercise":
        url = "/assets/images/icon-exercise.svg";
      break;
      case "Social":
        url = "/assets/images/icon-social.svg";
      break;
      case "Self Care":
        url = "/assets/images/icon-self-care.svg";
      break;
    }

    return url;
  }

  getColor(title: string): string {
    let color = "";

    switch(title) {
      case "Work":
        color = "bg-desaturated-red";
      break;
      case "Play":
        color = "bg-soft-blue";
      break;
      case "Study":
        color = "bg-light-red";
      break;
      case "Exercise":
        color = "bg-lime-green";
      break;
      case "Social":
        color = "bg-violet";
      break;
      case "Self Care":
        color = "bg-soft-orange";
      break;
    }

    return color;
  }

}
