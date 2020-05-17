import { TreeNode } from "./tree-node";

export const NODES: TreeNode[] = [
  {
    name: "connection 01",
    type: "connection",
    can_acssec: true,
    showChildren: false,
    children: [
      {
        name: "db1",
        type: "db",
        showChildren: false,
        children: [
          {
            name: "schema1",
            type: "schema",
            showChildren: false,
            children: [
              {
                name: "tbl1",
                type: "tbl",
                showChildren: false,
                children: [
                  { name: "colum1", type: "colum" },
                  { name: "colum2", type: "colum" },
                  { name: "colum3", type: "colum" },
                  { name: "colum4", type: "colum" },
                ],
              },
            ],
          },
          {
            name: "schema2",
            type: "schema",
            showChildren: false,
            children: [
              {
                name: "tbl1",
                type: "tbl",
                showChildren: false,
                children: [
                  { name: "colum1", type: "colum" },
                  { name: "colum2", type: "colum" },
                  { name: "colum3", type: "colum" },
                  { name: "colum4", type: "colum" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "db2",
        type: "db",
        showChildren: false,
        children: [
          {
            name: "schema2",
            type: "schema",
            showChildren: false,
            children: [
              {
                name: "tbl2",
                type: "tbl",
                showChildren: false,
                children: [
                  { name: "colum1", type: "colum" },
                  { name: "colum2", type: "colum" },
                  { name: "colum3", type: "colum" },
                  { name: "colum4", type: "colum" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "db3",
        type: "db",
        showChildren: false,
        children: [
          {
            name: "schema3",
            type: "schema",
            showChildren: false,
            children: [
              {
                name: "tbl3",
                type: "tbl",
                showChildren: false,
                children: [
                  { name: "colum1", type: "colum" },
                  { name: "colum2", type: "colum" },
                  { name: "colum3", type: "colum" },
                  { name: "colum4", type: "colum" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "connection 02",
    type: "connection",
    showChildren: false,
    can_acssec: false,
    children: [
      {
        name: "db1",
        type: "db",
        showChildren: false,
        children: [
          {
            name: "schema1",
            type: "schema",
            showChildren: false,
            children: [
              {
                name: "tbl1",
                type: "tbl",
                showChildren: false,
                children: [
                  { name: "colum1", type: "colum" },
                  { name: "colum2", type: "colum" },
                  { name: "colum3", type: "colum" },
                  { name: "colum4", type: "colum" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "db2",
        type: "db",
        showChildren: false,
        children: [
          {
            name: "schema2",
            type: "schema",
            showChildren: false,
            children: [
              {
                name: "tbl2",
                type: "tbl",
                showChildren: false,
                children: [
                  { name: "colum1", type: "colum" },
                  { name: "colum2", type: "colum" },
                  { name: "colum3", type: "colum" },
                  { name: "colum4", type: "colum" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "db3",
        type: "db",
        showChildren: false,
        children: [
          {
            name: "schema3",
            type: "schema",
            children: [
              {
                name: "tbl3",
                type: "tbl",
                showChildren: false,
                children: [
                  { name: "colum1", type: "colum" },
                  { name: "colum2", type: "colum" },
                  { name: "colum3", type: "colum" },
                  { name: "colum4", type: "colum" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "connection 03",
    type: "connection",
    showChildren: false,
    can_acssec: false,
    children: [
      {
        name: "db1",
        type: "db",
        showChildren: false,
        children: [
          {
            name: "schema1",
            type: "schema",
            showChildren: false,
            children: [
              {
                name: "tbl1",
                type: "tbl",
                showChildren: false,
                children: [
                  { name: "colum1", type: "colum" },
                  { name: "colum2", type: "colum" },
                  { name: "colum3", type: "colum" },
                  { name: "colum4", type: "colum" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "db2",
        type: "db",
        showChildren: false,
        children: [
          {
            name: "schema2",
            type: "schema",
            showChildren: false,
            children: [
              {
                name: "tbl2",
                type: "tbl",
                showChildren: false,
                children: [
                  { name: "colum1", type: "colum" },
                  { name: "colum2", type: "colum" },
                  { name: "colum3", type: "colum" },
                  { name: "colum4", type: "colum" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "db3",
        type: "db",
        showChildren: false,
        children: [
          {
            name: "schema3",
            type: "schema",
            showChildren: false,
            children: [
              {
                name: "tbl3",
                type: "tbl",
                showChildren: false,
                children: [
                  { name: "colum1", type: "colum" },
                  { name: "colum2", type: "colum" },
                  { name: "colum3", type: "colum" },
                  { name: "colum4", type: "colum" },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
