"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";
import Packing from "../_components/Packing";


const page = () => {
  
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  bg-gray-400 p-1 uppercase text-white">
          Add Packing
        </h4>
      </div>
      <Paper sx={{ padding: 2, marginBottom:"20px"  }}>
        <form>
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
              <TextField
                label="Style No"
                name="styleNo"
                fullWidth
                size="medium"
              />
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
              <TextField
                label="Description"
                name="description"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="QTY" name="qty" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="CTN QTY"
                name="ctnQty"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Net Weight"
                name="ratioSet"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Gross Weight"
                name="grossWeight"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Carton Measurement"
                name="cartonMeasurement"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="CBM" name="cbm" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  disableElevation
                >
                  Add Packing
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Paper>
   
      <Packing/>
    </>
  );
};

export default page;
