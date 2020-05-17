import { Component, OnInit, Input } from "@angular/core";
import { TreeNode } from "../tree-node.interface";

@Component({
  selector: "app-tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.css"],
})
export class TreeComponent implements OnInit {
  @Input()
  public nodes: Array<TreeNode> = [];

  @Input()
  public level = "1";

  public trackByFn(index, item) {
    return index;
  }
  constructor() {}

  ngOnInit(): void {}
}
