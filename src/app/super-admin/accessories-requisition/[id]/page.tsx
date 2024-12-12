"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Page = () => {
  return (
    <Paper sx={{ padding: 2, margin: "auto" }}>
      <h3 className="text-2xl text-center font-bold mb-5">
        Update Accessories Requisition
      </h3>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField label="S. No" name="no" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Buyer" name="buyer" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Order No" name="order" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Items" name="item" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Color" name="color" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Style No" name="style" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Line" name="line" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Floor" name="floor" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Date"
              name="date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Time" name="time" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Remark" name="remark" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12}>
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="contained"
                disableElevation
              >
                Update
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Page;
