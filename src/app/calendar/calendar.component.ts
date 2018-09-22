import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  OnInit,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import {AddScheduleComponent} from '../add-schedule/add-schedule.component'
import { MatDialog, MatDialogRef } from '@angular/material';
import { CalendarService } from '../calendar.service';
import { Schedule } from '../Schedule';
import { TokenStorage } from '../tokenStorage';
import { ScheduleEvent} from '../ScheduleEvent';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    event: ScheduleEvent;
  };

  refresh: Subject<any> = new Subject();

  scheduleEvents: ScheduleEvent[]=[];
  schedules: Schedule[];

  ngOnInit() {
    this.calendarService.getAllScheduleByDoctor(this.token.getUserId()).subscribe(schedule => this.schedules = schedule);
  }

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal,private dialog:MatDialog, private calendarService: CalendarService, private token: TokenStorage) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event};
    this.modal.open(this.modalContent, { size: 'lg' });
  }


  openDialog() {
     this.dialog.open(AddScheduleComponent);
  }

  
}
