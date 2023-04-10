"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const calendarEventSchema = new mongoose_1.Schema({
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
});
exports.default = (0, mongoose_1.model)("Event", calendarEventSchema);
