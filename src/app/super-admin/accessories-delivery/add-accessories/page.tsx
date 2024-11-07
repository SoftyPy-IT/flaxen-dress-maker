"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const Page = () => {
  return (
    <DefaultLayout>
      <Paper sx={{ padding: 3 }}>
      <h3 className="text-2xl text-center font-bold mb-5">Add Accessories</h3>
      <form>
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
            <TextField label="Name" name="name" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Line" name="line" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Item" name="item" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Color" name="color" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Quantity"
              name="quantity"
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Sign" name="sign" fullWidth size="medium" />
          </Grid>
          <Grid item xs={12} sm={6}>
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
              Add Accessories
            </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </Paper>
    </DefaultLayout>
  );
};

export default Page;
