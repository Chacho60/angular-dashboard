import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";

export interface User {
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  userUrl = "assets/users.json";

  getUser() {
    return this.http.get<User>(this.userUrl);
  }
}
