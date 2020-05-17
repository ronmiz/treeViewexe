import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import data from "../data/data.json";

@Injectable({
  providedIn: "root",
})
export class ConnectionsService implements OnInit {
  private _jsonURL = "../data/data.json";

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log(data);
  }

  public getConnectios(): Observable<any> {
    return this.http.get<any>(this._jsonURL);
  }
}
