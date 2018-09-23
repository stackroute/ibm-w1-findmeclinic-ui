
export class Prescription {
     patient: Patient;
     doctor: Doctor;
    findings: string;
    medicine:string;
}


export class Patient {
    patientFirstName: string;
    patientAge: string;
    patientEmail: string;
}

export class Doctor {
    doctorEmail:string;
    doctorName: string;
    doctorSpeciality: string;
}