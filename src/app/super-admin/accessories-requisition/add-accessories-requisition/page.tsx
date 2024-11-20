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
        Add Accessories Requisition
        </h3>
      </div>

      <Paper sx={{ padding: 2, margin: "auto" }}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="S. No" name="no" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Buyer" name="buyer" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Order No"
                name="order"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Items" name="item" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Color" name="color" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Style No"
                name="style"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Line" name="line" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Floor" name="floor" fullWidth size="medium" />
            </Grid>
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
              <TextField label="Time" name="time" fullWidth size="medium" />
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
                  Add Accessories Requisition
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default Page;
