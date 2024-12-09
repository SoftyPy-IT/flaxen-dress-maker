"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
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
  return (
    <>
      <Paper sx={{ padding: 2, margin: "auto" }}>
        <h3 className="text-2xl text-center font-bold">Edit Embroidery Unit</h3>
        <hr className="my-3" />
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
              <div className="w-full justify-center bg-white rounded ">
                <div className="w-full mt-1">
                  
                  {subCategories.map((subCategory, index) => (
                    <div
                      key={index}
                      className="w-full flex gap-2 items-center content-center "
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
                      <div className="w-[100px] flex -mt-2 gap-1">
                        {/* <IconButton
                          onClick={handleAddSubCategory}
                          sx={{
                            backgroundColor: "#e1e4f9",
                            "&:hover": {
                              backgroundColor: "#d0d3f0",
                            },
                          }}
                        >
                          <AddIcon className="" />
                        </IconButton> */}
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
                  // startIcon={<AddIcon />}
                  disableElevation
                >
                 Update
                </Button>
              </div>
            </Grid>
          </Grid>
        </div>
      </Paper>
    </>
  );
};

export default Page;
