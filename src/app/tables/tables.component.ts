import { Component, OnInit } from "@angular/core";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "app-tables",
  templateUrl: "./tables.component.html",
  styleUrls: ["./tables.component.css"],
})
export class TablesComponent implements OnInit {
  public tableData1: TableData;
  public tableData2: TableData;

  constructor() {}

  ngOnInit() {
    this.tableData1 = {
      headerRow: [
        "First Name",
        "Last Name",
        "Phone",
        "Is Checked-In?",
        "Actions",
      ],
      dataRows: [
        ["Dakota", "Rice", "+12029182132", "true"],
        ["Minerva", "Hooper", "+48693792148", "false"],
        ["Sage", "Rodriguez", "+16701491252", "false"],
        ["Philip", "Chaney", "+582126131512", "false"],
        ["Doris", "Greene", "+33935741628", "true"],
        ["Mason", "Porter", "+6911784663", "false"],
        ["Minerva", "Hooper", "+48693792148", "false"],
        ["Sage", "Rodriguez", "+16701491252", "false"],
        ["Philip", "Chaney", "+582126131512", "false"],
        ["Doris", "Greene", "+33935741628", "true"],
        ["Mason", "Porter", "+6911784663", "false"],
        ["Minerva", "Hooper", "+48693792148", "false"],
        ["Sage", "Rodriguez", "+16701491252", "false"],
        ["Philip", "Chaney", "+582126131512", "false"],
        ["Doris", "Greene", "+33935741628", "true"],
        ["Mason", "Porter", "+6911784663", "false"],
      ],
    };
  }
}
