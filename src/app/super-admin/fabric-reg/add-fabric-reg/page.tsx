"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TopSection from "@/components/shared/TopSection/TopSection";

const Page = () => {
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h3 className="my-3 inline-block  bg-gray-400 p-2 uppercase text-white">
          Add Fabric Register
        </h3>
      </div>
      <Paper sx={{ padding: 3, margin: "auto" }}>
        <hr className="my-3" />
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
              <TextField label="DIA" name="dia" fullWidth size="medium" />
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
              <TextField
                label="FAB REQ"
                name="fabreq"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Fabric Gross Weight"
                name="gross"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Fabric Finish Weight"
                name="finish"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="RIB/COLL/REQ"
                name="rib"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="RIB/COLLER Gross Weight"
                name="ribgrossweight"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="RIB/COLLER Finish Weight"
                name="ribfinishweight"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="BIN/RACK No"
                name="binno"
                fullWidth
                size="medium"
              />
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
            <Grid item xs={12} sm={6}>
              <TextField
                label="Balance"
                name="balance"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Remark" name="remark" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<AddIcon />}
                  disableElevation
                >
                  Add Fabric Register
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
