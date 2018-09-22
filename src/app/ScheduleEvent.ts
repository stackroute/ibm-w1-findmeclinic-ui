import { CalendarEvent } from "calendar-utils";
import { Schedule } from "./Schedule";

export interface ScheduleEvent extends CalendarEvent{
    schedule:Schedule;
}