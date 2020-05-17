import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { ConnectionsService } from "./connections.service";
import { Component, OnInit } from "@angular/core";
import * as SampleJson from "../data/data.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  filmIcon = faFilm;
  connections: any[];
  showDb: boolean = true;
  showSchm: boolean = true;
  showTable: boolean = true;
  selected: boolean = false;

  constructor(private _connectionsService: ConnectionsService) {}

  ngOnInit() {
    // this.connections = SampleJson.default.connections.connection;
    // console.log(this.connections);
  }
  chackAcssec(can_acssec: boolean) {
    if (can_acssec) {
      this.selected = !this.selected;
      console.log("this.selected", this.selected);
    }
  }
}
