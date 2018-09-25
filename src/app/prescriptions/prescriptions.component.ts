
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

import { Prescription } from '../Prescription';
import { DoctorService } from '../doctor.service';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { Doctor } from '../Doctor';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {
  appId: number;
  doctorName: string;
  //patientNam: string;
  docId;
  myPatient: Patient;
  myDoctor: Doctor;
  list;
  patientId;
  mid;
  m;
  i = 0;
  myPrescription: Prescription;
  value = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private router: Router, private service: DoctorService, private token: DoctorTokenStorage, private route: ActivatedRoute, private patientService: PatientService) {
  }
  savePres(prescription: Prescription) {
    console.log("pres" + prescription)
    this.service.savePrescription(prescription).subscribe(data => console.log(data));
    this.dialog.closeAll();
  }
  ngOnInit() {
<<<<<<< HEAD
    this.patientNam = this.route.snapshot.params['bookingBy'];
  this.docId = this.token.getUserId;
   this.service.getByEmail(this.docId).subscribe(data=>{console.log(data),
  this.myDoctor=data;
  this.prescriptions.patient.patientEmail=this.patientNam;
  this.prescriptions.doctor.doctorEmail=this.docId;
  this.prescriptions.doctor.doctorName=this.myDoctor.doctorName;
})
this.patientService.getPatientByMail(this.patientNam).subscribe(data=>{console.log(data),
  this.myPatient=data;
  this.prescriptions.patient.patientFirstName=this.myPatient.patientFirstName;
  console.log(this.myPatient.patientFirstName);
  this.prescriptions.patient.patientAge=this.myPatient.patientAge;
  this.prescriptions.patient.patientBloodGroup=this.myPatient.patientBloodGroup;
})
=======
    this.docId = this.token.getUserId();
    this.patientId= this.data.name;
    console.log(this.data.patientName);
    this.service.getByEmail(this.docId).subscribe(data1 => {
      console.log(data1),
      this.myDoctor = data1;
      this.prescriptions.patient.patientEmail = this.data.name;
      this.prescriptions.doctor.doctorEmail = this.docId;
      this.prescriptions.doctor.doctorName = this.myDoctor.doctorName;
    })
    this.patientService.getPatientByMail(this.patientId).subscribe(data2 => {
      console.log(data2),
      this.myPatient = data2;
      this.prescriptions.patient.patientFirstName = this.myPatient.patientFirstName;
      console.log(this.myPatient.patientFirstName);
      this.prescriptions.patient.patientAge = this.myPatient.patientAge;
      this.prescriptions.patient.patientBloodGroup = this.myPatient.patientBloodGroup;
    })
>>>>>>> d0485cbb43ba1a89a559d9a394f55e0d01dc55c6
  }
  prescriptions: Prescription = {
    findings: '', medicine: [''],
    patient: {
      patientEmail:'',
      patientPhoneNumber:'',
      patientPassword:'',
      patientFirstName:'',
      patientLastName:'',
      patientAddress:'',
      patientGender:'',
      patientBloodGroup:'',
      patientAge:''
<<<<<<< HEAD
=======
     
>>>>>>> 2c36ce95d3397ad3fe9cd3a47155300d4cc0d33c
    }
    , doctor: {
      doctorFirstName: '',
      doctorLastName: '',
      doctorName: '',
      doctorEmail: '',
      doctorPhoneNumber: '',
      doctorPassword: '',
      doctorGender: '',
      doctorQualification: '',
      doctorExperience: '',
      doctorAddressNo: {
        addressNo: '',
        hospitalName: '',
        streetName: '',
        locality: '',
        state: ''
      }
    }
  }
}