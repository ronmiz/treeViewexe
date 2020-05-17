import { TreeviewModule } from "./treeview/treeview.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeviewModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
