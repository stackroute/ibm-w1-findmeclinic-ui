import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';
import { Patient } from '../patient';
import { TokenStorage } from '../tokenStorage';
import { Appointment } from '../appointment';
import { DoctorTokenStorage } from '../doctorTokenStorage';

import {NotificationService} from '../notification.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
    private patientId;
    private stompClient;
    private patientMail;
    private doctorMail;
    patientFlag=false;
    doctorFlag=false;
    name: string;
notification;
    appointments: Appointment;
    constructor(private app: AppointmentService, private token: TokenStorage, private doctorTok: DoctorTokenStorage, private notificationService: NotificationService) {
        this.notificationService=notificationService;
    }

    ngOnInit() {

        this.setUpConnection();

    }

    getNotify() {
        console.log("hiiiiiiiiiiii11")
        this.patientMail = this.token.getUserId();
        this.doctorMail = this.doctorTok.getUserId();

        if (this.patientMail != null) {
            this.patientFlag=true;
            this.doctorFlag=false;

            this.notificationService.getPatientNotification(this.patientMail).subscribe(data=>{console.log(data);
            this.notification=data})
    }
    else{
        this.doctorFlag=true;
        this.patientFlag=false;

    this.notificationService.getDoctorNotification(this.doctorMail).subscribe(data =>{console.log(data),
    this.notification=data }

    );
}
    } 
  public setUpConnection() {
    console.log('hii')
    let socket = new SockJS('http://localhost:8080/socket');
    this.stompClient = Stomp.over(socket);
    let that = this;
    that.stompClient.connect({}, function (frame) {
        console.log('Connected: ' + frame);
        that.stompClient.subscribe('/topic/greetings', function (greeting) {
            console.log(greeting);
            JSON.parse(greeting.body).content;
        });
    });
}



    //   this.name='PriyankaDhoni';
    //    this.stompClient.send("/app/hello", {}, JSON.stringify(this.name));

    //   console.log("hiiiiii")
  
}
