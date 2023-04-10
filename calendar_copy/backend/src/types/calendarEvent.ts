import { Document } from "mongoose"

export interface CalendarEvent extends Document {
  title: string;
  start: Date;
  end: Date;
  backgroundColor: string;
}