import { Component, OnInit } from '@angular/core';
import { Prescription } from '../Prescription';
import { Medicines } from '../Medicine';
import { DoctorService } from '../doctor.service';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { Doctor} from '../Doctor';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';

@Component({
  selector: 'app-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.css']
})
export class PrescriptionsComponent implements OnInit {
  appId : number;
 doctorName : string;
 patientName : string;
  docId;
  myPatient:Patient;
  myDoctor:Doctor;
  list;
  mid;
  m;
  i = 0;
  myPrescription:Prescription;
  value = [];
  constructor( private service: DoctorService,private token:DoctorTokenStorage,private route:ActivatedRoute,private patientService:PatientService) {
  }

  savePres(prescription: Prescription) {
    console.log("pres"+prescription)
    this.service.savePrescription(prescription).subscribe(data => console.log(data));

  }

  ngOnInit() {

    this.patientName = this.route.snapshot.params['bookingBy'];
   this.docId= this.token.getUserId();
   this.service.getByEmail(this.docId).subscribe(data=>{console.log(data),
  this.myDoctor=data;
  this.prescriptions.patient.patientEmail=this.patientName;
  this.prescriptions.doctor.doctorEmail=this.docId;

})
this.patientService.getPatientByMail(this.patientName).subscribe(data=>{console.log(data),
  this.myPatient=data;
  this.prescriptions.patient.patientFirstName=this.myPatient.patientFirstName;
  this.prescriptions.patient.patientAge=this.myPatient.patientAge;
  this.prescriptions.patient.patientBloodGroup=this.myPatient.patientBloodGroup;
})
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



 
}
