import { Slot } from "./Slot";

export class Appointment{
    appointmentId: number;
    appointmentStatus: boolean;
    bookingBy:string;
    bookedFor:string;
    slot:Slot;
}