"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";

const Page = () => {
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h3 className="my-3 inline-block  bg-gray-400 p-2 uppercase text-white">
          Add Accessories Delivery
        </h3>
      </div>

      
      <Paper sx={{ padding: 3 }}>
        <div>
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
              <TextField label="Name" name="name" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Line" name="line" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Item" name="item" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Color" name="color" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Quantity"
                name="quantity"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Sign" name="sign" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
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
    </>
  );
};

export default Page;
