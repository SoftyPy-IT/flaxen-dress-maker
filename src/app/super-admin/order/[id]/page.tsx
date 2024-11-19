"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const page = () => {
  return (
    <>
      <Paper sx={{ padding: 3 }}>
        <h3 className="mb-5 text-center text-2xl font-bold">Update Order</h3>
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
              <TextField label="Buyer" name="buyer" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Order No"
                name="orderNo"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Size" name="size" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Color" name="color" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Order Quantity"
                name="orderQuantity"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Unit Price"
                name="unitPrice"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Total" name="total" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Swatch" name="swatch" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Item Description"
                name="itemDescription"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  disableElevation
                >
                  Update Order
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
