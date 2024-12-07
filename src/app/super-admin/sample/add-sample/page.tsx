"use client";
import * as React from "react";
import TopSection from "@/components/shared/TopSection/TopSection";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import Sample from "../_components/Sample";

const page = () => {
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  rounded-md bg-blue-600 p-2 uppercase text-white">
          Add Sample
        </h4>
      </div>
      
      <Paper sx={{ padding: 3, marginBottom:"20px" }}>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Name" name="name" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Style" name="style" type="number" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Order No" name="orderNo" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Sample Type" name="sampleType" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Sample QTY"
                name="sampleQty"
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="Sewing Start Time"
                name="sewingStart"
                type="time"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField fullWidth label="Remarks" name="remarks" />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <div className="flex justify-end">
                <Button variant="contained" color="primary" disableElevation>
                  Add Sample
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Sample/>
    </>
  );
};

export default page;
