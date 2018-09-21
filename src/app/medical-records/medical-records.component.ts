import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { Router } from '@angular/router';
import { FormUploadComponent } from '../upload/form-upload/form-upload.component';
import { ListUploadComponent } from '../upload/list-upload/list-upload.component';


@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponent implements OnInit {
 

  constructor(public dialog : MatDialog,private router: Router) { }

  ngOnInit() {
  }

  openUpload() :void {
    const dialogRef = this.dialog.open(FormUploadComponent);
  }

  openUploadList() :void {
    const dialogRef = this.dialog.open(ListUploadComponent);
  }

}
