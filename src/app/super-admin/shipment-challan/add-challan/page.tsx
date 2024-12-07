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
import ShipmentChallan from "../_components/ShipmentChallan";

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
        <h4 className="my-2 inline-block  rounded-md bg-blue-600 p-2 uppercase text-white">
          Add Shipment Challan
        </h4>
      </div>
      <Paper sx={{ padding: 2, marginBottom:"20px" }}>
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

      <ShipmentChallan/>
    </>
  );
};

export default page;
