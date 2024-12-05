"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import TopSection from "@/components/shared/TopSection/TopSection";
import CuttingReg from "../_components/CuttingReg";
import FlaxenForm from "@/components/Forms/Form";
import FlaxenInput from "@/components/Forms/Input";
import FlaxenDatePicker from "@/components/Forms/DatePicker";

const Page = () => {
  const [subCategories, setSubCategories] = React.useState<string[]>([""]);

  const handleAddSubCategory = () => {
    setSubCategories([...subCategories, ""]);
  };

  const handleSubCategoryChange = (index: number, value: string) => {
    const updatedSubCategories = [...subCategories];
    updatedSubCategories[index] = value;
    setSubCategories(updatedSubCategories);
  };

  const handleDeleteSubCategory = (index: number) => {
    if (subCategories.length > 1) {
      const updatedSubCategories = subCategories.filter((_, i) => i !== index);
      setSubCategories(updatedSubCategories);
    }
  };

  const handleSubmit = () => {
    console.log();
  };
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  rounded-md bg-blue-600 p-2 uppercase text-white ">
          Add Cutting Register 
        </h4>
      </div>
      <Paper sx={{ padding: 2, margin: "auto", marginBottom: "20px" }}>
        <div className="flex justify-between gap-10 p-4">
          <div>
            <FlaxenForm onSubmit={handleSubmit}>
              <FlaxenDatePicker label="Date" name="date" fullWidth size="medium" />
              <div className="my-3 flex gap-2">
                <FlaxenInput name="name" label="Buyer Name" fullWidth size="medium"/>
                <FlaxenInput name="order" label="Order No" fullWidth size="medium"/>
              </div>
              {subCategories.map((subCategory, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="mb-3 flex gap-2">
                    <FlaxenInput fullWidth name="color" label="Color" size="medium"/>
                    <FlaxenInput fullWidth name="size" label="Size" size="medium"/>
                    <FlaxenInput fullWidth name="qty" label="Quantity" size="medium"/>
                  </div>

                  <div className="-mt-2 flex w-[100px] gap-1">
                    <IconButton
                      onClick={handleAddSubCategory}
                      sx={{
                        backgroundColor: "#e1e4f9",
                        "&:hover": {
                          backgroundColor: "#d0d3f0",
                        },
                      }}
                    >
                      <AddIcon className="" />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteSubCategory(index)}
                      sx={{
                        backgroundColor: "#e1e4f9",
                        "&:hover": {
                          backgroundColor: "#d0d3f0",
                        },
                      }}
                    >
                      <RemoveCircleOutlineIcon className="text-red-600" />
                    </IconButton>
                  </div>
                </div>
              ))}
              <FlaxenInput name="total" label="Total" fullWidth size="medium"/>
            </FlaxenForm>
          </div>
          <div>
            <FlaxenForm onSubmit={handleSubmit}>
              <div className="mb-2 space-y-3">
                <FlaxenInput name="name" label="Fabric Req." fullWidth size="medium"/>
                <FlaxenInput name="order" label="Fabric Rcv." fullWidth size="medium"/>
                <FlaxenInput name="order" label="Fabric/Item GSM" fullWidth size="medium"/>
                <FlaxenInput name="order" label="Consumption" fullWidth size="medium"/>
              </div>
            </FlaxenForm>
          </div>
        </div>
      </Paper>

      {/* <Paper sx={{ padding: 2, margin: "auto", marginBottom: "20px" }}> */}
      {/* <Grid container spacing={0}> */}

      {/* <div className="flex justify-between">
        <div className="">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Date"
                name="date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Buyer Name"
                name="name"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Order No"
                name="order"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Order Qty."
                name="qty"
                // type="number"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="Total"
                name="roll"
                type="number"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                label="FAB REQ"
                name="fabreq"
                fullWidth
                size="medium"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8}>
            {subCategories.map((subCategory, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="mb-3 flex gap-2">
                  <TextField fullWidth name="color" label="Color" />
                  <TextField fullWidth name="size" label="Size" />
                  <TextField fullWidth name="qty" label="Quantity" />
                </div>

                <div className="-mt-2 flex w-[100px] gap-1">
                  <IconButton
                    onClick={handleAddSubCategory}
                    sx={{
                      backgroundColor: "#e1e4f9",
                      "&:hover": {
                        backgroundColor: "#d0d3f0",
                      },
                    }}
                  >
                    <AddIcon className="" />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteSubCategory(index)}
                    sx={{
                      backgroundColor: "#e1e4f9",
                      "&:hover": {
                        backgroundColor: "#d0d3f0",
                      },
                    }}
                  >
                    <RemoveCircleOutlineIcon className="text-red-600" />
                  </IconButton>
                </div>
              </div>
            ))}
          </Grid>
        </div>

        <div className="">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Fabric Rcv."
                name="gross"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Fabric/Item GSM"
                name="finish"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Consumption"
                name="dia"
                fullWidth
                size="medium"
              />
            </Grid>
          </Grid>
        </div>
      </div> */}

      {/* </Grid> */}
      {/* </Paper> */}

      <CuttingReg />
    </>
  );
};

export default Page;
