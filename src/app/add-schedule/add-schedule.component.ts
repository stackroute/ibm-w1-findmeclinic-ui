import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Schedule } from '../Schedule';
import { CalendarService } from '../calendar.service';
import { DoctorTokenStorage } from '../doctorTokenStorage';
@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  schedule: Schedule;
  constructor(private dialogRef: MatDialogRef<AddScheduleComponent>, public dialog: MatDialog, private calendarService: CalendarService, private token: DoctorTokenStorage) { this.schedule = new Schedule }

  ngOnInit() {
  }

  private schedules: Schedule[] = [];
  private createdByDoc = this.token.getUserId();

  addSchedule(schedule) {
    this.schedule.createdBy = this.createdByDoc;
    this.calendarService.addSchedule(schedule).subscribe(schedule => this.schedules.push(schedule));
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
