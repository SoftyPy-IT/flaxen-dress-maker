"use client";
import * as React from "react";
import { TextField, Button, Paper, Grid } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";
import WorkChallan from "../_components/WorkChallan";

const page = () => {
 
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  bg-gray-400 p-1 uppercase text-white">
          Add Challan
        </h4>
      </div>
      <Paper sx={{ padding: 2, marginBottom: "20px" }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Description"
                name="description"
                fullWidth
                size="medium"
              />
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
              <TextField
                label="No. of Pack's"
                name="noOfPacks"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
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
      <WorkChallan />
    </>
  );
};

export default page;
