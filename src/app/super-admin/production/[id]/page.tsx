"use client";
import React from "react";
import { TextField, Button, Paper, Grid } from "@mui/material";
// import TopSection from "@/components/shared/TopSection/TopSection";

const page = () => {
  return (
    <>
      {/* <TopSection /> */}
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  rounded-md bg-blue-600 p-2 uppercase text-white">
          Update Daily Production
        </h4>
      </div>
      <div className="mt-2 space-y-5 p-2">
        <div className="rounded bg-white p-2">
          <h3 className=" text-2xl font-bold">Order</h3>
          <div>
            <Grid container spacing={2}>

              <Grid item xs={12} sm={2}>
                <TextField label="Buyer Name" name="buyer" fullWidth />
              </Grid>

              <Grid item xs={12} sm={2}>
                <TextField label="Order No" name="order" fullWidth />
              </Grid>

              

              <Grid item xs={12} sm={2}>
                <TextField
                  name="Date"
                  type="date"
                  label="Date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="rounded bg-white p-2">
          <h3 className="text-2xl font-bold">Cutting</h3>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <TextField label="Receive" name="receive" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Print" name="print" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Previous Reject" name="prereject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Today Reject" name="tdyreject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Marge Reject" name="mrgreject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Sent" name="sent" fullWidth />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="rounded bg-white p-2">
          <h3 className="  text-2xl font-bold">Print</h3>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <TextField label="Receive" name="receive" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Print" name="print" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Previous Reject" name="prereject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Today Reject" name="tdyreject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Marge Reject" name="mrgreject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Sent" name="sent" fullWidth />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="rounded bg-white p-2">
          <h3 className="text-2xl font-bold">Embroidery</h3>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <TextField label="Receive" name="receive" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Print" name="print" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Previous Reject" name="prereject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Today Reject" name="tdyreject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Marge Reject" name="mrgreject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Sent" name="sent" fullWidth />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="rounded bg-white p-2">
          <h3 className="text-2xl font-bold">Sewing</h3>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <TextField label="Receive" name="receive" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Print" name="print" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Previous Reject" name="prereject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Today Reject" name="tdyreject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Marge Reject" name="mrgreject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Sent" name="sent" fullWidth />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="rounded bg-white p-2">
          <h3 className="text-2xl font-bold">Finishing</h3>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <TextField label="Receive" name="receive" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Print" name="print" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Previous Reject" name="prereject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Today Reject" name="tdyreject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Marge Reject" name="mrgreject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Sent" name="sent" fullWidth />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="rounded bg-white p-2">
          <h3 className="text-2xl font-bold">Poly</h3>
          <div>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={2}>
                <TextField label="Receive" name="receive" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Print" name="print" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Previous Reject" name="prereject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Today Reject" name="tdyreject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Marge Reject" name="mrgreject" fullWidth />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Sent" name="sent" fullWidth />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
