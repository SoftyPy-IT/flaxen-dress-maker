"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

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
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  bg-gray-400 p-1 uppercase text-white">
          Add Stock
        </h4>
      </div>
      <Paper sx={{ padding: 2, margin: "auto" }}>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Date"
                name="date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Buyer" name="buyer" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Order No"
                name="orderNo"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Color" name="color" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Cost (Tk)"
                name="cost"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Factory"
                name="factory"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Challan No"
                name="challanNo"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Dio" name="dio" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Roll" name="roll" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Fab" name="fab" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="G.S.M" name="gsm" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="G.we" name="gwe" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="F.we" name="fwe" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Received"
                name="received"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Remark" name="remark" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Bin" name="bin" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  disableElevation
                >
                  Add Stock
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <Paper sx={{ width: "100%", overflow: "hidden", marginTop:"20px" }}>
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
