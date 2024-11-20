"use client";
import * as React from "react";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";

const page = () => {
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h3 className="my-3 inline-block  bg-gray-400 p-2 uppercase text-white">
          Add Sample
        </h3>
      </div>
      <Paper sx={{ padding: 3 }}>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" name="name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Style" name="style" type="number" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Order No" name="orderNo" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Sample Type" name="sampleType" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sample QTY"
                name="sampleQty"
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sewing Start Time"
                name="sewingStart"
                type="time"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
    </>
  );
};

export default page;
