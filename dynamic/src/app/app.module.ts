import { TreeviewModule } from "./tree-module/treeview.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ConnectionsService } from "./connections.service";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule, TreeviewModule],
  providers: [ConnectionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
