import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.css']
})
export class AddScheduleComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddScheduleComponent>, public dialog: MatDialog) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
