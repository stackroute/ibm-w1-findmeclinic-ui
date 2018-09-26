import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';
import { NotificationService } from '../notification.service';
import { Notification} from '../Notification';
import { TokenStorage } from '../tokenStorage';

@Component({
  selector: 'app-book-confirm',
  templateUrl: './book-confirm.component.html',
  styleUrls: ['./book-confirm.component.css']
})
export class BookConfirmComponent implements OnInit {
  note:Notification;
  constructor(public router: Router,private token:TokenStorage,private dialogRef: MatDialogRef<BookConfirmComponent>,private notifyObj:NotificationService) {  }

  ngOnInit() {
  }

  close(){
    this.notifyObj.sendNotification(this.note).subscribe(data=>console.log("Hello"+data))
    this.router.navigate(['patient-profile']);
    this.dialogRef.close();
  }



}
