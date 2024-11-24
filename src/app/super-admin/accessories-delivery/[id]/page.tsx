"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Page = () => {
  return (
    <>
      <Paper sx={{ padding: 2, margin: "auto" }}>
        <h3 className="mb-5 text-center text-2xl font-bold">Update Accessories</h3>
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
              <TextField label="Name" name="name" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Line" name="line" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Item" name="item" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Color" name="color" fullWidth size="medium" />
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
              <TextField label="Sign" name="sign" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Remark" name="remark" fullWidth size="medium" />
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

export default Page;
