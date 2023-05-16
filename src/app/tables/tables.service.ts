import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

export interface UsersData {
  firstName: string;
  lastName: string;
  phone: string;
  isCheckedIn: boolean;
}
[];

@Injectable()
export class TablesService {
  constructor(private http: HttpClient) {}

  userUrl = "http://localhost:8081/users";

  getUsers() {
    return this.http.get<UsersData>(this.userUrl);
  }
}
