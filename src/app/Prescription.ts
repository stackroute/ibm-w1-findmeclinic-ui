import { Patient } from "./patient";
import { Doctor } from "./Doctor";

export class Prescription {
     patient: Patient;
     doctor: Doctor;
    findings: string;
    prescription:string;
}


// export class PatientPrescription {
//     patientName: string;
//     patientAge: string;
//     patientEmail: string;
// }

// export class DoctorPrescription {
//     doctorName: string;
//     doctorSpeciality: string;
// }