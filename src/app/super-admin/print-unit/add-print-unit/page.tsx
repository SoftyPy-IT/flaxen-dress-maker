"use client";
import * as React from "react";
import { Button, Paper, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import TopSection from "@/components/shared/TopSection/TopSection";
import PrintUnit from "../_components/PrintUnit";
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
          Add Print Unit
        </h4>
      </div>
      <Paper sx={{ padding: 2, margin: "auto", marginBottom: "20px" }}>
        <div className="flex justify-between gap-10 p-4">
          <div>
            <FlaxenForm onSubmit={handleSubmit}>
            <div className="my-4 flex justify-between gap-4">
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
                </div>
                <div className="space-y-4">
                  <FlaxenDatePicker
                    label="Date"
                    name="date"
                    fullWidth
                    size="medium"
                  />
                  <FlaxenInput
                    name="order"
                    label="Chln. No"
                    fullWidth
                    size="medium"
                  />
                </div>
              </div>
              {subCategories.map((subCategory, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="my-3 flex gap-4">
                    <FlaxenInput
                      fullWidth
                      name="color"
                      label="Color"
                      size="medium"
                    />
                    <FlaxenInput
                      fullWidth
                      name="size"
                      label="Size"
                      size="medium"
                    />
                    <FlaxenInput
                      fullWidth
                      name="quantity"
                      label="Quantity"
                      size="medium"
                    />
                    <FlaxenInput
                      name="fabreq"
                      label="Fabric Req."
                      fullWidth
                      size="medium"
                    />
                    <FlaxenInput
                      name="fabrcv"
                      label="Fabric Rcv."
                      fullWidth
                      size="medium"
                    />
                    <FlaxenInput
                      name="gsm"
                      label="Fabric/Item GSM"
                      fullWidth
                      size="medium"
                    />
                    <FlaxenInput
                      name="consumption"
                      label="Consumption"
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
            </FlaxenForm>
          </div>
          {/* <div>
            <FlaxenForm onSubmit={handleSubmit}>
              <div className="mb-2 space-y-3">
                <FlaxenInput name="name" label="Fabric Req." fullWidth size="medium"/>
                <FlaxenInput name="order" label="Fabric Rcv." fullWidth size="medium"/>
                <FlaxenInput name="order" label="Fabric/Item GSM" fullWidth size="medium"/>
                <FlaxenInput name="order" label="Consumption" fullWidth size="medium"/>
              </div>
            </FlaxenForm>
          </div> */}
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            variant="contained"
            size="medium"
            disableElevation
          >
            + Add
          </Button>
        </div>
      </Paper>

      <PrintUnit />
    </>
  );
};

export default Page;
