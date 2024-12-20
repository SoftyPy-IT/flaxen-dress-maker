"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";

const page = () => {
  return (
    <>
      <Paper sx={{ padding: 2, margin: "auto" }}>
        <h3 className="mb-5 text-center text-2xl font-bold">Update Fabric Stock</h3>
        <form>
          <Grid container spacing={2}>
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
              <TextField label="Buyer" name="buyer" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Order No"
                name="orderNo"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Color" name="color" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Cost (Tk)"
                name="cost"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Factory"
                name="factory"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Challan No"
                name="challanNo"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Dio" name="dio" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Roll" name="roll" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Fab" name="fab" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="G.S.M" name="gsm" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="G.we" name="gwe" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="F.we" name="fwe" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Received"
                name="received"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Remark" name="remark" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Bin" name="bin" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
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
