"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import FlaxenTextField from "@/components/Forms/TextField";
import FlaxenForm from "@/components/Forms/Form";
import FlaxenInput from "@/components/Forms/Input";
import FlaxenDatePicker from "@/components/Forms/DatePicker";

const page = () => {
  const handleSubmit = () => {
    console.log();
  };
  return (
    <>
      <Paper sx={{ padding: 3 }}>
        <h3 className="mb-5 text-center text-2xl font-bold">Update Order</h3>
        <FlaxenForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <FlaxenDatePicker
                label="Date"
                name="date"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Order No"
                name="orderNo"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput label="Buyer Name" name="buyer" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <FlaxenInput label="Size" name="size" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput label="Color" name="color" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Order Quantity"
                name="orderQuantity"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Unit Price"
                name="unitPrice"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Total Price"
                name="total"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Swatch"
                name="swatch"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenTextField
                name="itemDescription"
                placeholder="Description..."
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
                  Update
                </Button>
              </div>
            </Grid>
          </Grid>
        </FlaxenForm>
      </Paper>
    </>
  );
};

export default page;
