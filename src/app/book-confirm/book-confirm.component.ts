import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-book-confirm',
  templateUrl: './book-confirm.component.html',
  styleUrls: ['./book-confirm.component.css']
})
export class BookConfirmComponent implements OnInit {

  constructor(public router: Router,private dialogRef: MatDialogRef<BookConfirmComponent>) { }

  ngOnInit() {
  }

  close(){
    this.router.navigate(['patient-profile']);
    this.dialogRef.close();
  }



}
