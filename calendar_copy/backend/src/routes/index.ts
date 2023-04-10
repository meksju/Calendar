import { Router } from "express"
import { getEvents, addEvent, deleteEvent, updateEvent } from "../controllers/events"

const router: Router = Router()

router.get("/events", getEvents)

router.post("/add-event", addEvent)

router.delete("/delete-event/:id", deleteEvent)

router.put("/edit-event/:id", updateEvent)

export default router