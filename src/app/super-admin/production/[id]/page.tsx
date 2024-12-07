"use client";
import React from "react";
import { TextField, Button, Paper, Grid } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";

const page = () => {
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  rounded-md bg-blue-600 p-2 uppercase text-white">
          Edit Daily Production
        </h4>
      </div>
      <Paper sx={{ padding: 2, marginBottom: "20px" }}>
        <h3 className=" text-2xl font-bold">Order</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField label="Buyer" name="buyer" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Order No" name="orderNo" fullWidth />
            </Grid>
          </Grid>
        </div>
        <h3 className="mt-5  text-2xl font-bold">Cutting</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField label="Receive" name="receive" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Cutting" name="cutting" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Reject" name="reject" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Sent" name="sent" fullWidth />
            </Grid>
          </Grid>
        </div>
        <h3 className="mt-5  text-2xl font-bold">Print</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField label="Receive" name="receive" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Print" name="print" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Reject" name="reject" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Sent" name="sent" fullWidth />
            </Grid>
          </Grid>
        </div>
        <h3 className="mt-5 text-2xl font-bold">Embroidery</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField label="Receive" name="receive" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Embroidery" name="embroidery" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Reject" name="reject" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Sent" name="sent" fullWidth />
            </Grid>
          </Grid>
        </div>
        <h3 className="mt-5 text-2xl font-bold">Sewing</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField label="Receive" name="receive" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Sewing" name="sewing" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Reject" name="reject" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Sent" name="sent" fullWidth />
            </Grid>
          </Grid>
        </div>
        <h3 className="mt-5 text-2xl font-bold">Finishing</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField label="Receive" name="receive" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Finishing" name="finishing" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Reject" name="reject" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Sent" name="sent" fullWidth />
            </Grid>
          </Grid>
        </div>
        <h3 className="mt-5 text-2xl font-bold">Poly</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField label="Receive" name="receive" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Poly" name="poly" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Reject" name="reject" fullWidth />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Sent" name="sent" fullWidth />
            </Grid>
          </Grid>
        </div>
      </Paper>
    </>
  );
};

export default page;
