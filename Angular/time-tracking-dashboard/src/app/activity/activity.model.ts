export interface IActivity {
  title: string;
  timeframes: ITimeframe;
}

export interface ITimeframe {
  daily: ITimeframeDetail;
  weekly: ITimeframeDetail;
  monthly: ITimeframeDetail;
}

export interface ITimeframeDetail {
  current: number;
  previous: number;
}
