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

  private urlAdd = "http://localhost:8083/api/calendar/add";
  addSchedule(schedule: Schedule): Observable<Schedule>{
    return this.httpClient.post<Schedule>(this.urlAdd, schedule, httpOptions);
  }
  
  private urlGet = "http://localhost:8083/api/calendar/get";
  getAllSchedule(): Observable<Schedule[]>{
    return this.httpClient.get<Schedule[]>(this.urlGet);
  }

  private urlGetDoc = "http://localhost:8083/api/calendar/getSlots/";
  getScheduleSlot(doctorId: string): Observable<any>{
    return this.httpClient.get<any>(this.urlGetDoc+doctorId);
  }
  private urlGetSched = "http://localhost:8083/api/calendar/get/"
  getAllScheduleByDoctor(doctorId: string): Observable<Schedule[]>{
    return this.httpClient.get<Schedule[]>(this.urlGetSched+doctorId);
  }

  private urlDelete= "http://localhost:8083/api/calendar/delete/"
  deleteSchedule(scheduleId: any):Observable<Schedule>{
    return this.httpClient.delete<Schedule>(this.urlDelete+scheduleId, httpOptions);
  }

  
}

