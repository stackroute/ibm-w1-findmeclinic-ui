import { Component, OnInit } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  private stompClient;
  name: string;
  constructor() {
  }

  ngOnInit(){

       this.setUpConnection();
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

  public sendName() {
    

      this.name='Priyanka';

      this.stompClient.send("/app/hello", {}, JSON.stringify(this.name));
  }
}
