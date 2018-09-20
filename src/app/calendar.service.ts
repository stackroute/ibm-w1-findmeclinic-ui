import { Injectable } from '@angular/core';
import { Schedule} from './Schedule';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private httpClient: HttpClient) { }

  private urlAdd = "http://localhost:8091/api/calendar/add"
  addSchedule(schedule: Schedule): Observable<Schedule>{
    return this.httpClient.post<Schedule>(this.urlAdd, schedule, httpOptions);
  }
  
}
