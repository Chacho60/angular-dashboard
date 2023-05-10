import { Component, OnInit } from "@angular/core";

declare interface ScheduleData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "app-schedule",
  templateUrl: "./schedules.component.html",
  styleUrls: ["./schedules.component.css"],
})
export class SchedulesComponent implements OnInit {
  public scheduleData: ScheduleData;

  constructor() {}

  ngOnInit() {
    this.scheduleData = {
      headerRow: ["First Name", "Last Name", "Schedule", "Actions"],
      dataRows: [
        ["Dakota", "Rice", "true"],
        ["Minerva", "Hooper", "false"],
        ["Sage", "Rodriguez", "false"],
        ["Philip", "Chaney", "false"],
        ["Doris", "Greene", "true"],
        ["Mason", "Porter", "false"],
        ["Minerva", "Hooper", "false"],
        ["Sage", "Rodriguez", "false"],
        ["Philip", "Chaney", "false"],
        ["Doris", "Greene", "true"],
        ["Mason", "Porter", "false"],
        ["Minerva", "Hooper", "false"],
        ["Sage", "Rodriguez", "false"],
        ["Philip", "Chaney", "false"],
        ["Doris", "Greene", "true"],
        ["Mason", "Porter", "false"],
      ],
    };
  }
}
