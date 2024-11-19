"use client";
import * as React from "react";
import { TextField, Button, Paper, Grid } from "@mui/material";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Image from "next/image";
import PrintIcon from "@mui/icons-material/Print";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import EditIcon from "@mui/icons-material/Edit";

import flaxen from "../../../../../public/images/logos/flaxen.png";
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
      <h3 className="text-2xl text-center font-bold mb-5">
        Add Hourly Receive
      </h3>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Time"
              name="time"
              type="time"
              fullWidth
              size="medium"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField label="SWE/REC" name="sweRec" fullWidth size="medium" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="S/Sign"
              name="noOfPacks"
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="F/Send"
              name="noOfPacks"
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="F/Sign"
              name="noOfPacks"
              fullWidth
              size="medium"
            />
          </Grid>

          <Grid item xs={12}>
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="medium"
                disableElevation
              >
                Add Hour
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
