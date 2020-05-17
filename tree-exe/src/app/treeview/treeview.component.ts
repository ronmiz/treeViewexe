import { TreeModel } from "./../TreeModel";

import {
  Component,
  OnInit,
  Input,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  Renderer2,
} from "@angular/core";

@Component({
  selector: "app-treeview",
  templateUrl: "./treeview.component.html",
  styleUrls: ["./treeview.component.scss"],
})
export class TreeviewComponent implements OnInit, AfterViewInit {
  @ViewChildren("options") options: QueryList<ElementRef>;
  @ViewChildren("icons") iconsTags: QueryList<ElementRef>;
  @Input("model") model: TreeModel;
  eleList: ElementRef[];
  eleMap: Map<string, ElementRef>;
  iconsMap: Map<string, ElementRef>;
  TREEVIEW_SUFFIX: string = "_treeView";
  ICON_SUFFIX: string = "_icon";
  ARIA_EXPANDED: string = "aria-expanded";
  DATA_CHILDCOUNT = "data-childcount";
  DATA_LID: string = "data-lid";
  DATA_CODE: string = "data-code";
  DATA_ISFIRST: string = "data-first";
  DATA_ISLAST: string = "data-last";
  TAB_INDEX: string = "tabindex";
  currentActiveDescdentElement: string;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {}
  items: any = [
    {
      name: "Pictures",
      code: "PCTRS",
      children: [
        {
          name: "Vacation",
          code: "VAC",
          children: [
            {
              name: "Image 1",
              code: "IMG_111",
              children: null,
            },
            {
              name: "Image 2",
              code: "IMG_212",
              children: null,
            },
          ],
        },
        {
          name: "Graduation",
          code: "GRAD",
          children: [
            {
              name: "Image 3",
              code: "grad_111",
              children: null,
            },
            {
              name: "Image 4",
              code: "grad_212",
              children: null,
            },
          ],
        },
      ],
    },
    {
      name: "Videos",
      code: "VDS",
      children: [
        {
          name: "Video 1",
          code: "vid1",
          children: [],
        },
        {
          name: "Video 2",
          code: "vid2",
          children: [],
        },
      ],
    },
  ];

  ngAfterViewInit(): void {
    // this.createInitMap();
    this.eleList = this.options.toArray();
    this.setInitialActiveDescendent();
  }
  setInitialActiveDescendent() {
    if (this.eleList != null && Array.isArray(this.eleList)) {
      this.currentActiveDescdentElement = this.eleList[0].nativeElement.id;
    }
  }

  setTabIndexOnLoad(role: string, i: number) {
    return role == "tree" && i == 0 ? "0" : "-1";
  }
  getStateOfItem(item: any) {
    let state: string = null;
    if (item != null && item.children != null) {
      return false;
    }
    return state;
  }
  toggleSelection($event: any, item: any) {
    this.options.some(
      (eleRef: ElementRef, index: number, optionsarray: ElementRef[]) => {
        let code = eleRef.nativeElement.getAttribute("data-code");
        if (code == item.code) {
          let isExpanded = eleRef.nativeElement.getAttribute(
            this.ARIA_EXPANDED
          );
          let stateFlag = isExpanded == "true" ? "false" : "true";
          this.setElementAttribute(eleRef, this.ARIA_EXPANDED, stateFlag);
          if (this.currentActiveDescdentElement != null) {
            let caliEleRef = this.eleMap.get(this.currentActiveDescdentElement);
            if (caliEleRef != null) {
              this.setElementAttribute(caliEleRef, this.TAB_INDEX, "-1");
              this.setElementAttribute(eleRef, this.TAB_INDEX, "0");
              this.currentActiveDescdentElement = eleRef.nativeElement.id;
            }
          }
          return true;
        }
      }
    );
  }

  // getExpandCollapseClass(item: any) {
  //   if (item != null && item.children != null && item.children.length > 0) {
  //     return "fa " + this.model.iconExpand;
  //   }
  //   return "fa " + this.model.iconNeutral;
  // }

  isChildrenExists(items: any[]) {
    return items != null && items.length > 0 ? true : false;
  }

  collapsedState(item: any) {
    if (item != null && item.children != null && item.children.length > 0) {
      item.ariaExpanded = "false";
      return "false";
    }
    item.ariaExpanded = null;
    return null;
  }

  // executeKeydown($event) {
  //   let keyCode = $event.which;

  //   switch (keyCode) {
  //     case 40: //Down Arrow
  //       this.executeArrowDown($event);
  //       break;

  //     case 38: // Up Arrow
  //       this.executeUpArrow($event);
  //       break;
  //     case 37: // RightArrow
  //       this.executeLeftArrow($event);
  //       break;

  //     case 39: // RightArrow
  //       this.executeRightArrow($event);
  //       break;
  //     case 32: // Spacebar
  //       this.selectOption($event);
  //       break;
  //   }
  // }

  toggleExpand(eleRef: ElementRef, state: string) {
    this.setElementAttribute(eleRef, this.ARIA_EXPANDED, state);
  }

  //Determines if tree is expaneded or not.
  isExpanded(eleRef: ElementRef) {
    let isExpanded = eleRef.nativeElement.getAttribute(this.ARIA_EXPANDED);
    let childCount = eleRef.nativeElement.getAttribute(this.DATA_CHILDCOUNT);
    if (
      isExpanded == "true" &&
      !isNaN(childCount) &&
      parseInt(childCount) > 0
    ) {
      return true;
    }
    return false;
  }

  //determines if the current node has children or not
  getChildCount(item: any) {
    if (item != null && item[this.model.cnid] != null) {
      let items = item[this.model.cnid];
      return Array.isArray(items) ? items.length : 0;
    }
    return "0";
  }

  setElementAttribute(eleRef: ElementRef, attribute: string, value: string) {
    this.renderer.setAttribute(eleRef.nativeElement, attribute, value);
  }
}
