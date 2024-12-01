"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import TopSection from "@/components/shared/TopSection/TopSection";
import CuttingReg from "../_components/CuttingReg";


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
  return (
    <>
      <TopSection />
      <div className="flex justify-center">
        <h4 className="my-2 inline-block  bg-gray-400 p-1 uppercase text-white">
          Add Cutting Register
        </h4>
      </div>
      <Paper sx={{ padding: 2, margin: "auto", marginBottom: "20px" }}>
        <div className="">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Date"
                name="date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Buyer Name"
                name="color"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField label="Order No" name="lot" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Order Qty."
                name="factory"
                // type="number"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Color" name="cn" fullWidth size="medium" />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Consumption"
                name="dia"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Total"
                name="roll"
                type="number"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="FAB REQ"
                name="fabreq"
                fullWidth
                size="medium"
              />
            </Grid>

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
            {/* <Grid item xs={12} sm={3}>
              <TextField label="Size" name="delivery" fullWidth size="medium" />
            </Grid> */}
            <Grid item xs={12} sm={3}>
              <div className="w-full justify-center rounded bg-white ">
                <div className="mt-1 w-full">
                  {subCategories.map((subCategory, index) => (
                    <div
                      key={index}
                      className="flex w-full content-center items-center gap-2 "
                    >
                      <div className="flex w-[800px] gap-2">
                        <div className="w-full">
                          <Box
                            sx={{
                              width: "100%",
                              maxWidth: "100%",
                              paddingBottom: "8px",
                            }}
                          >
                            <TextField
                              fullWidth
                              name="size"
                              label="Size"
                              value={subCategory}
                              onChange={(e: any) =>
                                handleSubCategoryChange(index, e.target.value)
                              }
                            />
                          </Box>
                        </div>
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
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<AddIcon />}
                  disableElevation
                >
                  Add Cutting Register
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>

      <CuttingReg/>
    </>
  );
};

export default Page;
