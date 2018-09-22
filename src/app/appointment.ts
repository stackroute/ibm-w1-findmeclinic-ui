import { Slot } from "./Slot";

export class Appointment{
    appointmentId: number;
    appointmentStatus: boolean;
    bookedBy:string;
    bookedFor:string;
    slot:Slot;
}