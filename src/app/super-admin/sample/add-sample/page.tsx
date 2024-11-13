"use client";
import * as React from "react";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import flaxen from "../../../../../public/images/logos/flaxen.png";
import Image from "next/image";

const page = () => {
  return (
    <DefaultLayout>
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
        <h3 className="mb-4 text-center text-2xl font-bold">Add Sample</h3>
        <Box component="form" noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date"
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" name="name" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Style" name="style" type="number" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Order No" name="orderNo" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Sample Type" name="sampleType" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sample QTY"
                name="sampleQty"
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sewing Start Time"
                name="sewingStart"
                type="time"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Remarks" name="remarks" />
            </Grid>
            <Grid item xs={12} textAlign="center">
              <div className="flex justify-end">
                <Button variant="contained" color="primary" disableElevation>
                  Add Sample
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </DefaultLayout>
  );
};

export default page;
