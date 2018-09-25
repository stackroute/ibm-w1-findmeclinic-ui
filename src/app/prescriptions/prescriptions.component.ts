import { Component, OnInit } from '@angular/core';
import { Prescription } from '../Prescription';
import { Medicines } from '../Medicine';
import { DoctorService } from '../doctor.service';
import { DoctorTokenStorage } from '../doctorTokenStorage';
import { Doctor} from '../Doctor';
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
  appId : number;
 doctorName : string;
 patientNam : string;
  docId;
  myPatient:Patient;
  myDoctor:Doctor;
  list;
  mid;
  m;
  i = 0;
  myPrescription:Prescription;
  value = [];
  constructor( private router:Router,private service: DoctorService,private token:DoctorTokenStorage,private route:ActivatedRoute,private patientService:PatientService) {
  }

  savePres(prescription: Prescription) {
    console.log("pres"+prescription)
    this.service.savePrescription(prescription).subscribe(data => console.log(data));

  }

  ngOnInit() {

    this.patientNam = this.route.snapshot.params['bookingBy'];
  this.docId = this.service.doctorId;
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



  show(){
    this.router.navigate(['doctor-profile']);
  }
}
