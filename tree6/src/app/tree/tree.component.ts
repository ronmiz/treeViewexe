import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { TreeNode } from "./tree-node";
@Component({
  selector: "app-tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.css"],
})
export class TreeComponent implements OnInit {
  @Input() treeData: TreeNode[];

  ngOnInit() {}
  classType(node: TreeNode): string {
    console.log(node.type);
    return node.type;
  }

  toggleChild(node: TreeNode) {
    if (!node.can_acssec) node.showChildren = !node.showChildren;
  }
}
