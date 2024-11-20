"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";

const page = () => {
  return (
    <>
      <>
        <TopSection />
        <div className="flex justify-center">
          <h3 className="my-3 inline-block  bg-gray-400 p-2 uppercase text-white">
            Add Daily Receive
          </h3>
        </div>

        <Paper sx={{ padding: 3 }}>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date"
                  name="date"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Style No"
                  name="styleNo"
                  fullWidth
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Order No"
                  name="orderNo"
                  size="medium"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Description"
                  name="description"
                  size="medium"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="QTY" name="qty" size="medium" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="CTN QTY"
                  name="ctnQty"
                  size="medium"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Net Weight"
                  name="ratioSet"
                  size="medium"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Gross Weight"
                  name="grossWeight"
                  size="medium"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Carton Measurement"
                  name="cartonMeasurement"
                  size="medium"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                    Add Daily Receive
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </>
    </>
  );
};

export default page;
