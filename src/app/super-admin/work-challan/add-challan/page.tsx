"use client";
import * as React from "react";
import { TextField, Button, Paper, Grid } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";

const page = () => {
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h3 className="my-3 inline-block  bg-gray-400 p-2 uppercase text-white">
          Add Challan
        </h3>
      </div>
      <Paper sx={{ padding: 3 }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Description"
                name="description"
                fullWidth
                size="medium"
              />
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
              <TextField
                label="No. of Pack's"
                name="noOfPacks"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Remarks"
                name="remarks"
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
    </>
  );
};

export default page;
