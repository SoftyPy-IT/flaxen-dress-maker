"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";
import AccessoriesDelivery from "../_components/AccessoriesDelivery";

const Page = () => {
  const rows = [
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      line: 6,
      item: "SIT",
      color: "PINR",
      quantity: 50,
      sign: "John Doe",
      remark: "25",
    },
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      line: 6,
      item: "SIT",
      color: "PINR",
      quantity: 50,
      sign: "John Doe",
      remark: "25",
    },
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      line: 6,
      item: "SIT",
      color: "PINR",
      quantity: 50,
      sign: "John Doe",
      remark: "25",
    },
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      line: 6,
      item: "SIT",
      color: "PINR",
      quantity: 50,
      sign: "John Doe",
      remark: "25",
    },
    {
      id: "1",
      date: "27-10-2024",
      name: "John Doe",
      line: 6,
      item: "SIT",
      color: "PINR",
      quantity: 50,
      sign: "John Doe",
      remark: "25",
    },
  ];
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  bg-gray-400 p-1 uppercase text-white">
          Add Accessories Delivery
        </h4>
      </div>
      
      <Paper sx={{ padding: 2, marginBottom:"20px" }}>
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
              <TextField label="Name" name="name" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Line" name="line" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Item" name="item" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Color" name="color" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Quantity"
                name="quantity"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Sign" name="sign" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Remark" name="remark" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  disableElevation
                >
                  Add Accessories
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>

      <AccessoriesDelivery/>
    </>
  );
};

export default Page;
