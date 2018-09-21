import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { BookConfirmComponent } from '../book-confirm/book-confirm.component';
import { Observable } from 'rxjs';
import { Slot } from '../slot';
@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {

  slots: Observable<Slot[]>;

  constructor(public dialog : MatDialog, private calenderService: CalenderService ) { }

  ngOnInit() {
    this.reloadData();
  }

  openDialog() {
    const dialogRef = this.dialog.open(BookConfirmComponent);
 
  }

  reloadData() {
    this.slots = this.calenderService.getSlots();
  }

}
