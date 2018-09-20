import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { PatientProfileComponent } from '../patient-profile/patient-profile.component';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponent implements OnInit {
 

  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  closeRecords() :void {
    const dialogRef = this.dialog.open(PatientProfileComponent);
  }

  openRecords() :void {
    const dialogRef = this.dialog.open(UploadFileComponent);
  }

}
