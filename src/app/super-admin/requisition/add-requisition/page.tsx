"use client";
import React from "react";
import { TextField, Button, Paper, Grid, Box } from "@mui/material";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import flaxen from "../../../../../public/images/logos/flaxen.png";

const page = () => {
  return (
    <>
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
          <p>
            Corporate Office : House# 35, Road# 9, Sector# 15, Uttara, Dhaka
          </p>
          <p>
            Phone : +880-2-8913263, 8916198, Fax : +88-02-8913263 E-mail :
            flaxen@flaxengroup.com, Web : www.flaxengroup.com
          </p>
        </div>
        <Paper sx={{ padding: 2 }}>
          <h3 className="mb-5 text-center text-2xl font-bold">
            Add Fabric Requisition
          </h3>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date"
                  name="date"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Buyer" name="buyer" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Order No" name="orderNo" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Color" name="color" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Item" name="item" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="GSM" name="gsm" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Req/KG" name="kg" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="F/RCV/KG" name="rcv" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Blance" name="blance" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Req/KG" name="kg" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="F/RCV/KG" name="rcv" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Blance" name="blance" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="P/L" name="pl" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Total/KG" name="total" fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Remarks" name="remark" fullWidth multiline />
              </Grid>
              <Grid item xs={12}>
                <div className="flex justify-end">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disableElevation
                  >
                    Add Requisition
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </DefaultLayout>
    </>
  );
};

export default page;
