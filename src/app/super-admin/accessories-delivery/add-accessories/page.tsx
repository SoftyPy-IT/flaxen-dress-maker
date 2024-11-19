"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import flaxen from "../../../../../public/images/logos/flaxen.png";

const Page = () => {
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
    </>
  );
};

export default Page;
