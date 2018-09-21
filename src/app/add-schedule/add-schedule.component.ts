import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Schedule } from '../Schedule';
import { CalendarService } from '../calendar.service';
@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {
  schedule;
  constructor(private dialogRef: MatDialogRef<AddScheduleComponent>, public dialog: MatDialog,private calendarService: CalendarService) {this.schedule= new Schedule }

  ngOnInit() {
  }

  private schedules: Schedule[] = [];
  
  addSchedule(schedule){
    this.calendarService.addSchedule(schedule).subscribe(schedule=>this.schedules.push(schedule));
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
