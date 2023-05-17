import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

export interface Events {
  firstName?: String;
  lastName?: String;
  date?: Date;
}
[];

@Injectable()
export class CalendarService {
  constructor(private http: HttpClient) {}

  eventsUrl = "http://192.168.1.11:3000/api/v1/user";

  getUser() {
    return this.http.get<Array<Events>>(this.eventsUrl);
  }
}
