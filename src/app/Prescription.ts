import { Patient } from "./patient";
import { Doctor } from "./Doctor";

export class Prescription {
     patient: Patient;
     doctor: Doctor;
    findings: string;
    medicine:string[];
}


