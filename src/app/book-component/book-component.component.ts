import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { BookConfirmComponent } from '../book-confirm/book-confirm.component';
import { Observable } from 'rxjs';
import { Slot } from '../Slot';
import { CalendarService } from '../calendar.service';
@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {

  docId = "DocB";
  slots: Slot[];

  constructor(public dialog : MatDialog, private calenderService: CalendarService ) { }

  ngOnInit() {
    // this.reloadData();
    this.calenderService.getScheduleSlot(this.docId)
    .subscribe(data => {      console.log(data);

      this.slots =data});
  }

  openDialog() {
    const dialogRef = this.dialog.open(BookConfirmComponent);
 
  }

  reloadData() {
    
    
  }
  // console.log(slots)

}
