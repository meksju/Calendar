import { CalendarEvent } from "../types/calendarEvent";
import { model, Schema } from "mongoose";

const calendarEventSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        start: {
            type: Date,
            required: true,
        },

        end: {
            type: Date,
            required: true,
        },

        backgroundColor: {
            type: String,
            required: false,
        }
    }
)

export default model<CalendarEvent>("Event", calendarEventSchema)