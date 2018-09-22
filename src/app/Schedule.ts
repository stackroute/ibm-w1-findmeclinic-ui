import {Slot} from './Slot'
export class Schedule{
     scheduleId: string;
     description: string;
     workPlace: string;
     scheduleDate: any;
     startTime: any;
     endTime:any;
     createdBy: string;
     scheduleCreationDate: Date;
     timePerPatient: number;
     slots: Slot[] = [];

     /**
      * setCreatedBy
      */
    
}