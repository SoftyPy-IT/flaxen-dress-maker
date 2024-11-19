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
      description: "Description of goods",
      quantity: "Quantity",
      noOfPack: "123",
      remarks: "Remarks",
    },
    {
      id: "1",
      description: "Description of goods",
      quantity: "Quantity",
      noOfPack: "123",
      remarks: "Remarks",
    },
    {
      id: "1",
      description: "Description of goods",
      quantity: "Quantity",
      noOfPack: "123",
      remarks: "Remarks",
    },
    {
      id: "1",
      description: "Description of goods",
      quantity: "Quantity",
      noOfPack: "123",
      remarks: "Remarks",
    },
    {
      id: "1",
      description: "Description of goods",
      quantity: "Quantity",
      noOfPack: "123",
      remarks: "Remarks",
    },
  ];
  return (
    <>
      <div className="flex justify-between bg-white shadow-md rounded p-5 mb-5">
        <h3 className="text-2xl font-bold">Delivery Challan</h3>
        <Link href="/super-admin/work-challan/add-challan">
          <Button variant="contained" disableElevation startIcon={<AddIcon />}>
            Add
          </Button>
        </Link>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                },
              }}
            >
              <TableRow className="bg-[#5D87FF]">
                <TableCell align="center" className="whitespace-nowrap">
                  SL NO
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Description of goods
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Quantity
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  No. of Pack&apos;s
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Remarks
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "& td": {
                      border: "1px solid rgba(224, 224, 224, 1)",
                    },
                  }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                  <TableCell align="center">{row.noOfPack}</TableCell>
                  <TableCell align="center">{row.remarks}</TableCell>
                  <TableCell align="center" className="space-x-2">
                    <Link href="/super-admin/work-challan/challan-preview">
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
                    <Link href="/super-admin/work-challan/id">
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
    </>
  );
};

export default page;
