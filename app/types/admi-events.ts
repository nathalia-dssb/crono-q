export interface CurrentEvent {
  eventId: number;
  currentSpot: number;
  eventName: string;
  location: string;
}

export interface EventSummary {
  eventId: number;
  eventName: string;
  startDate: Date;
  location: string;
}

export interface SpotData {
  spotNumber: string;
  userId: string;
  userName: string;
  userCareer: string;
  userSemester: string;
}
