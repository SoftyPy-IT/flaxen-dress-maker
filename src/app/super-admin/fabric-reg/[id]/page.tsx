"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Page = () => {
  return (
    <>
      <Paper sx={{ padding: 3, margin: "auto" }}>
        <h3 className="text-2xl text-center font-bold">
          Edit Fabric Register
        </h3>
        <hr className="my-3"/>
        <div className="">
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
              <TextField label="Color" name="color" fullWidth size="medium" />
            </Grid>
         			
            <Grid item xs={12} sm={6}>
              <TextField label="Lot/B No" name="lot" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Factory"
                name="factory"
                // type="number"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="CH/No" name="cn" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="DIA"
                name="dia"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Roll"
                name="roll"
                type="number"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="FAB REQ" name="fabreq" fullWidth size="medium" />
            </Grid>
            				
            <Grid item xs={12} sm={6}>
              <TextField label="Fabric Gross Weight" name="gross" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Fabric Finish Weight" name="finish" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Delivery"
                name="delivery"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Name" name="name" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  // startIcon={<AddIcon />}
                  disableElevation
                >
                  Update
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
