import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "tree-abc";

  nodes = [
    {
      name: "conectin01",
      can_acssec: false,
      children: [
        {
          name: "db1",
          children: [
            {
              name: "schema1",
              children: [
                {
                  name: "tbl1",
                  children: [
                    { name: "colum1" },
                    { name: "colum2" },
                    { name: "colum3" },
                    { name: "colum4" },
                  ],
                },
              ],
            },
            {
              name: "schema2",
              children: [
                {
                  name: "tbl1",
                  children: [
                    { name: "colum1" },
                    { name: "colum2" },
                    { name: "colum3" },
                    { name: "colum4" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "db2",
          children: [
            {
              name: "schema2",
              children: [
                {
                  name: "tbl2",
                  children: [
                    { name: "colum1" },
                    { name: "colum2" },
                    { name: "colum3" },
                    { name: "colum4" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "db3",
          children: [
            {
              name: "schema3",
              children: [
                {
                  name: "tbl3",
                  children: [
                    { name: "colum1" },
                    { name: "colum2" },
                    { name: "colum3" },
                    { name: "colum4" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "conectin02",
      can_acssec: true,
      children: [
        {
          name: "db1",
          children: [
            {
              name: "schema1",
              children: [
                {
                  name: "tbl1",
                  children: [
                    { name: "colum1" },
                    { name: "colum2" },
                    { name: "colum3" },
                    { name: "colum4" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "db2",
          children: [
            {
              name: "schema2",
              children: [
                {
                  name: "tbl2",
                  children: [
                    { name: "colum1" },
                    { name: "colum2" },
                    { name: "colum3" },
                    { name: "colum4" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "db3",
          children: [
            {
              name: "schema3",
              children: [
                {
                  name: "tbl3",
                  children: [
                    { name: "colum1" },
                    { name: "colum2" },
                    { name: "colum3" },
                    { name: "colum4" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "conectin03",
      can_acssec: true,
      children: [
        {
          name: "db1",
          children: [
            {
              name: "schema1",
              children: [
                {
                  name: "tbl1",
                  children: [
                    { name: "colum1" },
                    { name: "colum2" },
                    { name: "colum3" },
                    { name: "colum4" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "db2",
          children: [
            {
              name: "schema2",
              children: [
                {
                  name: "tbl2",
                  children: [
                    { name: "colum1" },
                    { name: "colum2" },
                    { name: "colum3" },
                    { name: "colum4" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "db3",
          children: [
            {
              name: "schema3",
              children: [
                {
                  name: "tbl3",
                  children: [
                    { name: "colum1" },
                    { name: "colum2" },
                    { name: "colum3" },
                    { name: "colum4" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
}
