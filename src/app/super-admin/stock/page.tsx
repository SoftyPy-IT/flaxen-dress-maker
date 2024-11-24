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

import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "@mui/x-date-pickers";

const rows = [
  {
    id: "1",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    factory: "Adury",
    challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    received: "...",
    remark: "...",
    bin: "Cutting",
  },
  {
    id: "2",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    factory: "Adury",
    challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    received: "...",
    remark: "...",
    bin: "Cutting",
  },
  {
    id: "3",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    factory: "Adury",
    challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    received: "...",
    remark: "...",
    bin: "Cutting",
  },
  {
    id: "4",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    factory: "Adury",
    challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    received: "...",
    remark: "...",
    bin: "Cutting",
  },
  {
    id: "5",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    factory: "Adury",
    challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    received: "...",
    remark: "...",
    bin: "Cutting",
  },
];

const page = () => {
  return (
    <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-5 rounded bg-white p-5 shadow-md">
        <h3 className="text-2xl font-bold">Stock Register</h3>
        <div className=" flex w-[500px] items-center gap-3">
          <TextField
            name="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            size="small"
          />

          <TextField
            size="small"
            variant="outlined"
            placeholder="Search by Order"
            InputProps={{
              endAdornment: <SearchIcon />,
            }}
            fullWidth
          />

          <Link href="/super-admin/stock/add-stock">
            <Button
              variant="contained"
              disableElevation
              startIcon={<AddIcon />}
            >
              Add
            </Button>
          </Link>
        </div>
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                  color: "white",
                },
              }}
            >
              <TableRow className="bg-[#5D87FF]">
                <TableCell align="center" className="whitespace-nowrap">
                  Date
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Buyer
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Order No
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Color
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Cost
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Factory
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Challan No
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Dio
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Roll
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Fab
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  G.S.M
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  G.W.E
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  F.W.E
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Received
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Remark
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Bin
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "& td": {
                      border: "1px solid rgba(224, 224, 224, 1)",
                    },
                  }}
                >
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.date}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.buyer}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.OrderNo}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.color}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.cost} Tk
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.factory}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.challanNo}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.dio}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.roll}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.fab}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.gsm}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.gwe}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.fwe}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.received}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.remark}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.bin}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="space-x-2 whitespace-nowrap"
                  >
                    <Link href="/super-admin/stock/stock-preview">
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
                    <Link href="/super-admin/stock/id">
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
