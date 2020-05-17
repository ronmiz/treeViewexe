import { TreeviewComponent } from "./../treeview/treeview.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TreeviewComponent],
  imports: [CommonModule, TreeviewComponent],
  exports: [TreeviewComponent],
})
export class TreeviewModule {}
