import {Slot} from './Slot'
export class Schedule{
    private scheduleId: string;
    private description: string;
    private workPlace: string;
    private scheduleDate: any;
    private startTime: any;
    private endTime:any;
    private createdBy: string;
    private scheduleCreationDate: Date;
    private timePerPatient: number;
    private slots: Slot[] = [];
}