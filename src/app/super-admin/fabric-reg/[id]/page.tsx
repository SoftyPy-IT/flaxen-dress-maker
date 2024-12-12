"use client";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button, Paper, Grid } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";
import FabricReg from "../_components/FabricReg";
import FlaxenForm from "@/components/Forms/Form";
import FlaxenDatePicker from "@/components/Forms/DatePicker";
import FlaxenInput from "@/components/Forms/Input";

const Page = () => {
  const handleSubmit = () => {
    console.log();
  };
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  rounded-md bg-blue-600 p-2 uppercase text-white">
          Update Fabric Register
        </h4>
      </div>
      <Paper sx={{ padding: 2, margin: "auto", marginBottom: "20px" }}>
        <FlaxenForm onSubmit={handleSubmit}>
          <div className="my-8 flex justify-between gap-20 ">
            <div className="space-y-4">
              <FlaxenInput
                name="name"
                label="Buyer Name"
                fullWidth
                size="medium"
              />
              <FlaxenInput
                name="order"
                label="Order No"
                fullWidth
                size="medium"
              />
              <FlaxenInput
                name="qty"
                label="Order Quantity"
                fullWidth
                size="medium"
              />
              <FlaxenInput
                name="construction"
                label="Fabric Construction"
                fullWidth
                size="medium"
              />
            </div>
            <div className="space-y-4">
              <FlaxenDatePicker
                label="Date"
                name="date"
                fullWidth
                size="medium"
              />
              <FlaxenInput
                name="chln"
                label="Chln. No"
                fullWidth
                size="medium"
              />

              <FlaxenInput
                name="gsm"
                label="Fabric GSM/RQD"
                fullWidth
                size="medium"
              />
              <FlaxenDatePicker
                label="Shipment Date"
                name="date"
                fullWidth
                size="medium"
              />
            </div>
          </div>
          <Grid container spacing={2}>
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
              <FlaxenInput label="Roll" name="roll" fullWidth size="medium" />
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
                  startIcon={<AddIcon />}
                  disableElevation
                >
                  Update
                </Button>
              </div>
            </Grid>
          </Grid>
        </FlaxenForm>
      </Paper>

      <FabricReg />
    </>
  );
};

export default Page;
