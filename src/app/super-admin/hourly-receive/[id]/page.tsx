"use client";
import * as React from "react";
import { TextField, Button, Paper, Grid } from "@mui/material";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const page = () => {
  return (
    <>
      <Paper sx={{ padding: 3 }}>
        <h3 className="mb-5 text-center text-2xl font-bold">
          Update Hourly Receive
        </h3>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Time"
                name="time"
                type="time"
                fullWidth
                size="medium"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="SWE/REC"
                name="sweRec"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="S/Sign"
                name="noOfPacks"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="F/Send"
                name="noOfPacks"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
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
                  Update
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
