import { Response, Request } from "express"
import { CalendarEvent } from "../../types/calendarEvent";
import Event from "../../models/calendarEvent"

const getEvents = async (req: Request, res: Response): Promise<void> => {
    try {
        const events: CalendarEvent[] = await Event.find()
        res.status(200).json({ events })
    } catch (error) {
        throw error
    }
}

const addEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<CalendarEvent, "title" | "start" | "end" | "backgroundColor">

        const event: CalendarEvent = new Event({
            title: body.title,
            start: body.start,
            end: body.end,
            backgroundColor: body.backgroundColor,
        })

        const newEvent: CalendarEvent = await event.save()
        const allEvents: CalendarEvent[] = await Event.find()
        res
            .status(201)
            .json({ message: "New event added", event: newEvent, events: allEvents })
    } catch (error) {
        throw error
    }
}

const updateEvent = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        params: { id },
        body,
      } = req
      const updateEvent:  CalendarEvent| null = await Event.findByIdAndUpdate(
        { _id: id },
        body
      )
      const allEvents: CalendarEvent[] = await Event.find()
      res.status(200).json({
        message: "Event updated",
        event: updateEvent,
        eventss: allEvents,
      })
    } catch (error) {
      throw error
    }
  }
  
const deleteEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedEvent: CalendarEvent | null = await Event.findByIdAndRemove(
            req.params.id
        )
        const allEvents: CalendarEvent[] = await Event.find()
        res.status(200).json({
            message: "Event deleted",
            event: deletedEvent,
            events: allEvents,
        })
    } catch (error) {
        throw error
    }
}

export { getEvents, addEvent, deleteEvent, updateEvent }