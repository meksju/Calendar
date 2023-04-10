"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEvent = exports.deleteEvent = exports.addEvent = exports.getEvents = void 0;
const calendarEvent_1 = __importDefault(require("../../models/calendarEvent"));
const getEvents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const events = yield calendarEvent_1.default.find();
        res.status(200).json({ events });
    }
    catch (error) {
        throw error;
    }
});
exports.getEvents = getEvents;
const addEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const event = new calendarEvent_1.default({
            title: body.title,
            start: body.start,
            end: body.end,
            backgroundColor: body.backgroundColor,
        });
        const newEvent = yield event.save();
        const allEvents = yield calendarEvent_1.default.find();
        res
            .status(201)
            .json({ message: "New event added", event: newEvent, events: allEvents });
    }
    catch (error) {
        throw error;
    }
});
exports.addEvent = addEvent;
const updateEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateEvent = yield calendarEvent_1.default.findByIdAndUpdate({ _id: id }, body);
        const allEvents = yield calendarEvent_1.default.find();
        res.status(200).json({
            message: "Event updated",
            event: updateEvent,
            eventss: allEvents,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateEvent = updateEvent;
const deleteEvent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedEvent = yield calendarEvent_1.default.findByIdAndRemove(req.params.id);
        const allEvents = yield calendarEvent_1.default.find();
        res.status(200).json({
            message: "Event deleted",
            event: deletedEvent,
            events: allEvents,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteEvent = deleteEvent;
