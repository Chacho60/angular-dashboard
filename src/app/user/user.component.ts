import { Component, OnInit } from "@angular/core";
import { User, UserService } from "./user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
  providers: [UserService],
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) {}

  user: User | undefined;

  showUser() {
    this.userService
      .getUser()
      // clone the data object, using its known Config shape
      .subscribe((data: User) => (this.user = { ...data }));
  }

  ngOnInit() {
    this.showUser();
  }
}
