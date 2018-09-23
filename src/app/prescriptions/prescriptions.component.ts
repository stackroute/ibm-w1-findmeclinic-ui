import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Prescription } from '../Prescription';
import { Medicines } from '../Medicine';
import { DoctorService } from '../doctor.service';
@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {
  appId = "4050";
  doctorName = "Dr.Senthil";
  patientName = "Keerthana";
  patientAge = "22";
  bloodGroup = "O+";
  medicine: Medicines;
  medicine1: Medicines;
  list;
  mid;
  m;
  i = 0;
  value = [];
  constructor(private dialog: MatDialogRef<PrescriptionsComponent>, private service: DoctorService) {
    this.medicine = new Medicines();
    this.medicine1 = new Medicines();

    this.list = this.medicine1.timing = ["Beforefood", "AfterFood"]
  }

  savePres(prescription: Prescription) {
    this.service.savePrescription(prescription).subscribe(data => console.log(data));
  }

  prescriptions: Prescription = {
    findings: '', medicine: '',
    patient: {
      patientEmail: '',
      patientFirstName: '',
      patientAge: ''
    }
    , doctor: {
      doctorName: '',
      doctorEmail: '',
      doctorSpeciality: ''
    }
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

  closeDialog() {
    this.dialog.close();
  }

}
