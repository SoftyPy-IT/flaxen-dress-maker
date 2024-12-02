"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";
import Reject from "../_components/Reject";

const page = () => {
  const rows = [
    {
      id: "1",
      no: "1",
      order: "AB-0124",
      item: "Bottom",
      color: "Pink",
      name: "John Doe",
      style: "SIT",
      line: 6,
      floor: 5,
      reject: "John Doe",
      total: "05",
      remark: "25",
      details: "reject for wrong swing",
    },
    {
      id: "2",
      no: "2",
      order: "AB-0124",
      item: "Bottom",
      color: "Pink",
      name: "John Doe",
      style: "SIT",
      line: 6,
      floor: 5,
      reject: "John Doe",
      total: "05",
      remark: "25",
      details: "reject for wrong swing",
    },
    {
      id: "3",
      no: "3",
      order: "AB-0124",
      item: "Bottom",
      color: "Pink",
      name: "John Doe",
      style: "SIT",
      line: 6,
      floor: 5,
      reject: "John Doe",
      total: "05",
      remark: "25",
      details: "reject for wrong swing",
    },
  ];
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  bg-gray-400 p-1 uppercase text-white">
          Add Reject
        </h4>
      </div>

      <Paper sx={{ padding: 2, marginBottom: "20px" }}>
        <div>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={3}>
              <TextField
                label="Date"
                name="date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                size="medium"
              />
            </Grid> */}

            <Grid item xs={12} sm={3}>
              <TextField
                label="Order No"
                name="orderNo"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField label="Lot No" name="lot" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField label="Color" name="color" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Style No"
                name="styleNo"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField label="Line NO" name="line" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField label="Floor" name="floor" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Who Reject"
                name="reject"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Total Reject"
                name="total"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Remark" name="remark" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Details"
                name="details"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  disableElevation
                >
                  Add Reject
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>

     <Reject/>
    </>
  );
};

export default page;
