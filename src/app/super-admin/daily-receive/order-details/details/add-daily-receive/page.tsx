"use client";

import * as React from "react";
import { Button, TextField, Paper, Grid } from "@mui/material";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton } from "@mui/material";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const Page = () => {
  const [subCategories, setSubCategories] = useState<string[]>([""]);

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
  return (
    <>
      <DefaultLayout>
        <Paper sx={{ padding: 3 }}>
          <h3 className="mb-5 text-center text-2xl font-bold">
            Add Daily Receive
          </h3>

          {subCategories.map((subCategory, index) => (
            <div key={index} className="flex w-full gap-4">
              <div className="grid w-[1200px] grid-cols-1 gap-2 rounded border p-2 md:grid-cols-2 lg:grid-cols-4">
                <TextField
                  label="Line No"
                  name="styleNo"
                  fullWidth
                  size="medium"
                />

                <TextField
                  label="Total Product"
                  name="orderNo"
                  size="medium"
                  fullWidth
                />
                {subCategories.map((subCategory, index) => (
                  <div key={index} className="flex  gap-4">
                    <div className="grid  grid-cols-1 gap-2 rounded border p-2 md:grid-cols-2 ">
                      <TextField
                        label="Challan No"
                        name="description"
                        size="medium"
                        fullWidth
                      />

                      <TextField
                        label="QTY"
                        name="description"
                        size="medium"
                        fullWidth
                      />
                    </div>

                    <div className="w-[180px] space-x-2 ">
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
              </div>

              <div className="w-[180px] space-x-2 ">
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

          <Grid item xs={12}>
            <div className="flex justify-end">
              <Button
                type="submit"
                variant="contained"
                size="medium"
                disableElevation
              >
                Add Daily Receive
              </Button>
            </div>
          </Grid>
        </Paper>
      </DefaultLayout>
    </>
  );
};

export default Page;
