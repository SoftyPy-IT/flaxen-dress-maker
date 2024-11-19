"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import flaxen from "../../../../../public/images/logos/flaxen.png";
import Image from "next/image";

const page = () => {
  return (

    <>
      <div className="mb-5 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <Image src={flaxen} alt="img" className="h-10 w-10" />
          <h1>Flaxen Dress Maker Ltd</h1>
        </div>
        <p>
          Factory: Meghdubi; Ward-40, Gazipur City Corporation, Gazipur-1700,
          Bangladesh
        </p>
        <p>Corporate Office : House# 35, Road# 9, Sector# 15, Uttara, Dhaka</p>
        <p>
          Phone : +880-2-8913263, 8916198, Fax : +88-02-8913263 E-mail :
          flaxen@flaxengroup.com, Web : www.flaxengroup.com
        </p>
      </div>
      <Paper sx={{ padding: 3 }}>
        <h3 className="mb-5 text-center text-2xl font-bold">Add Order</h3>
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
                  Add Order
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
