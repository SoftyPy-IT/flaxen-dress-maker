"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const page = () => {
  return (
    <>
      <DefaultLayout>
        <Paper sx={{ padding: 3 }}>
          <h3 className="mb-5 text-center text-2xl font-bold">
            Update Packing
          </h3>
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
                  fullWidth
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Description"
                  name="description"
                  fullWidth
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="QTY" name="qty" fullWidth size="medium" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="CTN QTY"
                  name="ctnQty"
                  fullWidth
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Net Weight"
                  name="ratioSet"
                  fullWidth
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Gross Weight"
                  name="grossWeight"
                  fullWidth
                  size="medium"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Carton Measurement"
                  name="cartonMeasurement"
                  fullWidth
                  size="medium"
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
                    Update
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </DefaultLayout>
    </>
  );
};

export default page;
