import { Component, OnInit, Input } from "@angular/core";
import { TreeNode } from "../tree-node.interface";

@Component({
  selector: "app-tree-node",
  templateUrl: "./tree-node.component.html",
  styleUrls: ["./tree-node.component.css"],
})
export class TreeNodeComponent implements OnInit {
  @Input()
  public node: TreeNode;

  @Input()
  public level = "1";

  expand = true;

  public calculateLevel(): string {
    return `${this.level},1`;
  }
  constructor() {}

  ngOnInit(): void {}
}
