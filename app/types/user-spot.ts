export interface CurrentSpot {
  userSpot: number;
  eventName: string;
  currentSpot: number;
  waitingTime: Date;
  location: string;
}

export interface RegisteredSpot {
  id: number;
  userSpot: number;
  eventName: string;
  startDate: Date;
}

export interface UnregisteredSpot {
  id: number;
  eventName: string;
  startDate: Date;
  endDate: Date;
  location: string;
}
