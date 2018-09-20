import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { UploadFileComponent } from '../upload-file/upload-file.component';

@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrls: ['./medical-records.component.css']
})
export class MedicalRecordsComponent implements OnInit {
 
  // showFiller = false;
  // show(): boolean{
  //   if(this.showFiller===false){
  //     this.showFiller=true;
  //   }else{
  //     this.showFiller=true;
  //   }
  //   return this.showFiller
  // }
  constructor(public dialog : MatDialog) { }

  ngOnInit() {
  }

  openRecords() {
    const dialogRef = this.dialog.open(UploadFileComponent);
  }

}
