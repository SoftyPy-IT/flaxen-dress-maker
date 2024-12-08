"use client";
import * as React from "react";
import { TextField, Button, Paper, Grid } from "@mui/material";
import TopSection from "@/components/shared/TopSection/TopSection";
import WorkChallan from "../_components/WorkChallan";
import FlaxenInput from "@/components/Forms/Input";
import FlaxenForm from "@/components/Forms/Form";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import FlaxenDatePicker from "@/components/Forms/DatePicker";
import FlaxenSelect from "@/components/Forms/Select";

const page = () => {
  const handleSubmit = () => {
    console.log();
  };
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  rounded-md bg-blue-600 p-2 uppercase text-white">
          Add Challan
        </h4>
      </div>

      <Paper sx={{ padding: 2, margin: "auto", marginBottom: "20px" }}>
        <div className="flex justify-between gap-10 p-4">
          <div>
            <FlaxenForm onSubmit={handleSubmit}>
              <div className="space-y-3">
                <FlaxenSelect
                  label="Send To"
                  name="send"
                  fullWidth
                  size="medium"
                  items={["Cutting", "Swing", "Stock"]}
                />
                <FlaxenInput
                  label="Receiver Name"
                  name="receiver"
                  fullWidth
                  size="medium"
                />
                <FlaxenInput
                  label="Buyer Name"
                  name="buyer"
                  fullWidth
                  size="medium"
                />

                <FlaxenInput
                  label="Order No"
                  name="order"
                  fullWidth
                  size="medium"
                />
              </div>
            </FlaxenForm>
          </div>
          <div>
            <FlaxenForm onSubmit={handleSubmit}>
              <div className="mb-2 space-y-3">
                <FlaxenDatePicker
                  label="Date"
                  name="date"
                  fullWidth
                  size="medium"
                />

                <FlaxenInput label="GP No" name="gp" fullWidth size="medium" />
                <FlaxenInput
                  label="Challan No"
                  name="challan"
                  fullWidth
                  size="medium"
                />
                <FlaxenInput
                  label="Quantity"
                  name="qty"
                  fullWidth
                  size="medium"
                />
              </div>
            </FlaxenForm>
          </div>
        </div>
        <hr />
        <div>
          <FlaxenForm onSubmit={handleSubmit}>
            <div className="mb-2 grid grid-cols-4 gap-3 p-4">
              <FlaxenInput
                label="Description"
                name="description"
                fullWidth
                size="medium"
              />
              <FlaxenInput label="Color" name="color" fullWidth size="medium" />
              <FlaxenInput
                label="Style/Size"
                name="style"
                fullWidth
                size="medium"
              />
              <FlaxenInput
                label="Line"
                name="line"
                fullWidth
                size="medium"
              />
              <FlaxenInput
                label="New Reject"
                name="rej"
                fullWidth
                size="medium"
              />
              <FlaxenInput
                label="Marge Reject"
                name="marge"
                fullWidth
                size="medium"
              />
              <FlaxenInput
                label="Total Quantity"
                name="qty"
                fullWidth
                size="medium"
              />

              <FlaxenInput
                label="Remarks"
                name="remarks"
                fullWidth
                size="medium"
              />
            </div>
          </FlaxenForm>
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            disableElevation
          >
            Add Challan
          </Button>
        </div>
      </Paper>

      <WorkChallan />
    </>
  );
};

export default page;
