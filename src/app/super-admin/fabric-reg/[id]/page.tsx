"use client";
import * as React from "react";
import { Button, Paper, Grid } from "@mui/material";
import FlaxenForm from "@/components/Forms/Form";
import FlaxenDatePicker from "@/components/Forms/DatePicker";
import FlaxenInput from "@/components/Forms/Input";

const Page = () => {
  const handleSubmit = () => {
    console.log();
  };
  return (
    <>
      <Paper sx={{ padding: 2, margin: "auto" }}>
        <h3 className="text-center text-2xl font-bold">Update Fabric Register</h3>
        <hr className="my-3" />
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
              <FlaxenInput label="Color" name="color" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Lot/B No"
                name="lot"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Factory"
                name="factory"
                // type="number"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput label="CH/No" name="cn" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput label="DIA" name="dia" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Roll"
                name="roll"
                type="number"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="FAB REQ"
                name="fabreq"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Fabric Gross Weight"
                name="gross"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Fabric Finish Weight"
                name="finish"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="RIB/COLL/REQ"
                name="rib"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="RIB/COLLER Gross Weight"
                name="ribgrossweight"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="RIB/COLLER Finish Weight"
                name="ribfinishweight"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="BIN/RACK No"
                name="binno"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Delivery"
                name="delivery"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput label="Name" name="name" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Balance"
                name="balance"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Remark"
                name="remark"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
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

export default Page;
