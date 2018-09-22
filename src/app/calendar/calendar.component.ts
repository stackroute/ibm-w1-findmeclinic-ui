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
    event: CalendarEvent;
  };

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[]=[];
  schedules: Schedule[];

  ngOnInit() {
    this.calendarService.getAllScheduleByDoctor(this.token.getUserId()).subscribe(schedule => this.schedules = schedule);
  }

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal,private dialog:MatDialog, private calendarService: CalendarService, private token: TokenStorage) {}


  openDialog() {
     this.dialog.open(AddScheduleComponent);
  }

  
}
