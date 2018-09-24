import { Component, OnInit } from '@angular/core';
import { Prescription } from '../Prescription';
import { Medicines } from '../Medicine';
import { DoctorService } from '../doctor.service';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { Doctor} from '../Doctor';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {
  appId : number;
 doctorName : string;
 patientName : string;
  // appId = "4050";
  // patientName = "Keerthana";
  // patientAge = "22";
  // bloodGroup = "O+";
  docId;
  myDoctor:Doctor;
  medicine: Medicines;
  medicine1: Medicines;
  list;
  mid;
  m;
  i = 0;
  myPrescription:Prescription;
  value = [];
  constructor( private service: DoctorService,private token:DoctorTokenStorage,private route:ActivatedRoute) {
    this.medicine = new Medicines();
    this.medicine1 = new Medicines();

    // this.route.queryParams.subscribe(params =>{
    //   // console.log(params);
    //   this.appId= params["appointmentId"];
    //   this.doctorName=params["bookedFor"];
    //   this.patientName=params["bookedBy"];
    // });
    this.list = this.medicine1.timing = ["Beforefood", "AfterFood"]



  }

  savePres(prescription: Prescription) {
    console.log("pres"+prescription)
    this.service.savePrescription(prescription).subscribe(data => console.log(data));

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
      patientDobDate:'',
      patientDobMonth:'',
      patientDobYear:'',
      patientBloodGroup:'',
      patientAge:''
    }
    , doctor: {
      doctorFirstName:'',
      doctorLastName:'',
      doctorName:'',
      doctorEmail:'',
      doctorPhoneNumber:'',
      doctorPassword:'',
      doctorGender:'',
      address:'',
      doctorLocality:'',
      doctorQualification:'',
      doctorExperience:'',
      doctorAddressNo:{
        addressNo:'',
        hospitalName:'',
        streetName:'',
        locality:'',
        state:''
      }
    }
  }



  ngOnInit() {

    this.patientName = this.route.snapshot.params['bookingBy'];
   this.docId= this.token.getUserId();
   this.service.getByEmail(this.docId).subscribe(data=>{console.log(data),
  this.myDoctor=data;
  this.prescriptions.patient.patientEmail=this.patientName;
  this.prescriptions.doctor.doctorEmail=this.docId;

})



  }

  add() {
    this.value[this.i] = this.i;
    this.i++;
    this.mid = this.medicine;
  }
  open() {
    this.m = this.medicine;
  }



 
}
