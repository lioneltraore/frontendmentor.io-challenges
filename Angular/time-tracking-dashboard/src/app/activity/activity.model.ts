export interface IActivity {
  title: string;
  timeframes: IDuration;
}

export interface IDuration {
  daily: ITimeframe;
  weekly: ITimeframe;
  monthly: ITimeframe;
}

export interface ITimeframe {
  current: number;
  previous: number;
}
