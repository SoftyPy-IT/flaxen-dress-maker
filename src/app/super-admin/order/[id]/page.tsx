"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid, IconButton } from "@mui/material";
import FlaxenTextField from "@/components/Forms/TextField";
import FlaxenForm from "@/components/Forms/Form";
import FlaxenInput from "@/components/Forms/Input";
import FlaxenDatePicker from "@/components/Forms/DatePicker";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

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
              <FlaxenInput label="Buyer" name="buyer" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FlaxenInput
                label="Order Quantity"
                name="tqty"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={0}>
              {subCategories.map((subCategory, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="my-3 flex gap-4">
                    <FlaxenInput
                      fullWidth
                      name="size"
                      label="Size"
                      size="medium"
                    />
                    <FlaxenInput
                      fullWidth
                      name="color"
                      label="Color"
                      size="medium"
                    />

                    <FlaxenInput
                      fullWidth
                      name="quantity"
                      label="Quantity"
                      size="medium"
                    />
                    <FlaxenInput
                      label="Unit Price"
                      name="unitPrice"
                      fullWidth
                      size="medium"
                    />

                    <TextField
                      label="Total Price"
                      name="total"
                      fullWidth
                      size="medium"
                    />
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

            <Grid item xs={12} sm={3}>
              <TextField
                label="Total All Price"
                name="allprice"
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

export default Page;
