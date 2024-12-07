"use client";
import React from "react";
import { TextField, Button, Paper, Grid } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";
import FabricRequisition from "../_components/FabricRequisition";

const page = () => {
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  rounded-md bg-blue-600 p-2 uppercase text-white">
          Add Fabric Requisition
        </h4>
      </div>
      <Paper sx={{ padding: 2, marginBottom:"20px" }}>
        <h3 className="mb-5 text-center text-2xl font-bold"></h3>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Date"
                name="date"
                type="date"
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Buyer" name="buyer" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Order No" name="orderNo" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Color" name="color" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Item" name="item" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="GSM" name="gsm" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Req/KG" name="kg" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="F/RCV/KG" name="rcv" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Blance" name="blance" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Req/KG" name="kg" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="F/RCV/KG" name="rcv" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Blance" name="blance" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="P/L" name="pl" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Total/KG" name="total" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Remarks" name="remark" fullWidth multiline />
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disableElevation
                >
                  Add Requisition
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Paper>

    <FabricRequisition/>
    </>
  );
};

export default page;
