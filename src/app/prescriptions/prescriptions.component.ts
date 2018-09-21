import { Component, OnInit } from '@angular/core';
import{Medicines}from '../Medicine';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {
  appId="4050";
 doctorName= "Dr.Senthil";
 patientName="Keerthana";
 patientAge="22";
 bloodGroup="O+";
  medicine: Medicines;
  medicine1: Medicines;
  list;
  mid;
  m;
  i = 0;
  value = [];
  constructor(private dialog:MatDialogRef<PrescriptionsComponent>) {
    this.medicine = new Medicines();
    this.medicine1 = new Medicines();
 
    this.list = this.medicine1.timing = ["Beforefood", "AfterFood"]
  }
 
 
  
  ngOnInit() {
  }
 
 
  add() {
    this.value[this.i] = this.i;
    this.i++;
    this.mid = this.medicine;
  }
  open() {
    this.m = this.medicine;
  }

  closeDialog(){
    this.dialog.close();
  }
 
}
