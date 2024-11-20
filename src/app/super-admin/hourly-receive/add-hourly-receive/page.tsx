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
          Add Hourly Receive
        </h3>
      </div>
      <Paper sx={{ padding: 3 }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Time"
                name="time"
                type="time"
                fullWidth
                size="medium"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="SWE/REC"
                name="sweRec"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="S/Sign"
                name="noOfPacks"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="F/Send"
                name="noOfPacks"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="F/Sign"
                name="noOfPacks"
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
                  Add Hour
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
