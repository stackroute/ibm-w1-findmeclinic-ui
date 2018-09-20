import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { BookConfirmComponent } from '../book-confirm/book-confirm.component';

@Component({
  selector: 'app-book-component',
  templateUrl: './book-component.component.html',
  styleUrls: ['./book-component.component.css']
})
export class BookComponentComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(BookConfirmComponent);
 
  }
}
