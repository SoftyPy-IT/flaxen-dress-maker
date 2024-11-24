"use client";
import * as React from "react";
import { TextField, Button, Paper, Grid } from "@mui/material";
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

const page = () => {
  const rows = [
    {
      id: "1",
      description: "Description of goods",
      line: "10",
      style: "01",
      quantity: "Quantity",
      remarks: "Remarks",
    },
    {
      id: "1",
      description: "Description of goods",
      line: "10",
      style: "01",
      quantity: "Quantity",
      remarks: "Remarks",
    },
    {
      id: "1",
      description: "Description of goods",
      line: "10",
      style: "01",
      quantity: "Quantity",
      remarks: "Remarks",
    },
    {
      id: "1",
      description: "Description of goods",
      line: "10",
      style: "01",
      quantity: "Quantity",
      remarks: "Remarks",
    },
    {
      id: "1",
      description: "Description of goods",
      line: "10",
      style: "01",
      quantity: "Quantity",
      remarks: "Remarks",
    },
  ];
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  bg-gray-400 p-1 uppercase text-white">
          Add Shipment Challan
        </h4>
      </div>
      <Paper sx={{ padding: 2 }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField label="To" name="to" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Receiver Name"
                name="receiver"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Buyer Name"
                name="buyer"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Order No"
                name="order"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Color" name="color" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Date"
                name="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                size="medium"
                type="date"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField label="Quantity" name="qty" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Challan No"
                name="challan"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="medium"
                  disableElevation
                >
                  Add Challan
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
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
                  SL NO
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Description
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Line
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Style
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Quantity
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
                  <TableCell align="center">{row.line}</TableCell>
                  <TableCell align="center">{row.style}</TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                  <TableCell align="center">{row.remarks}</TableCell>
                  <TableCell align="center" className="space-x-2">
                    <Link href="/super-admin/shipment-challan/challan-preview">
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
                    <Link href="/super-admin/shipment-challan/id">
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
