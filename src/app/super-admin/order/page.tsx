"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const page = () => {
  const rows = [
    {
      id: "1",
      buyer: "John Doe",
      OrderNo: "123",
      description: "Description",
      size: "Size",
      color: "Blue",
      orderQuantity: "Order Quantity",
      price: "20",
      total: "Total",
      swatch: "Swatch",
    },
    {
      id: "1",
      buyer: "John Doe",
      OrderNo: "123",
      description: "Description",
      size: "Size",
      color: "Blue",
      orderQuantity: "Order Quantity",
      price: "20",
      total: "Total",
      swatch: "Swatch",
    },
    {
      id: "1",
      buyer: "John Doe",
      OrderNo: "123",
      description: "Description",
      size: "Size",
      color: "Blue",
      orderQuantity: "Order Quantity",
      price: "20",
      total: "Total",
      swatch: "Swatch",
    },
    {
      id: "1",
      buyer: "John Doe",
      OrderNo: "123",
      description: "Description",
      size: "Size",
      color: "Blue",
      orderQuantity: "Order Quantity",
      price: "20",
      total: "Total",
      swatch: "Swatch",
    },
    {
      id: "1",
      buyer: "John Doe",
      OrderNo: "123",
      description: "Description",
      size: "Size",
      color: "Blue",
      orderQuantity: "Order Quantity",
      price: "20",
      total: "Total",
      swatch: "Swatch",
    },
  ];
  return (
    <DefaultLayout>
      <div className="mb-5 flex justify-between rounded bg-white p-5 shadow-md">
        <h3 className="text-2xl font-bold">Work Order</h3>
        <Link href="/super-admin/order/add-order">
          <Button variant="contained" disableElevation startIcon={<AddIcon />}>
            Add
          </Button>
        </Link>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow className="bg-[#5D87FF]">
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  Buyer
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  Order No
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  Item Description
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  Size
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  Color
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  Order Quantity
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  Unit Price
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  Total
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  Swatch
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "& td": {
                      borderBottom: "1px solid rgba(224, 224, 224, 1)",
                    },
                  }}
                >
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.buyer}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.OrderNo}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.description}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.size}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.color}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.orderQuantity}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.price}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.total}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.swatch}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="space-x-2 whitespace-nowrap"
                  >
                    <button className="text-blue-600">
                      <VisibilityIcon fontSize="small" />
                    </button>
                    <Link href="/super-admin/order/id">
                      <button className="text-green-600">
                        <EditIcon fontSize="small" />
                      </button>
                    </Link>
                    <button className="text-red-600">
                      <DeleteIcon fontSize="small" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </DefaultLayout>
  );
};

export default page;
