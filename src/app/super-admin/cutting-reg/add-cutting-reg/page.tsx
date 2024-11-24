"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

import TopSection from "@/components/shared/TopSection/TopSection";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import EditIcon from "@mui/icons-material/Edit";
import TableContainer from "@mui/material/TableContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";

const rows = [
  {
    id: "1",
    date: "27-10-2024",
    name: "Abed",
    order: "39695",
    orderqty: "White",
    color: "Fahim",
    size: "11253",
    total: "74",
    fabreq: "58",
    fabrcv: "4797",
    gsm: "1242",
    consumption: "1162",
  },
  {
    id: "2",
    date: "27-10-2024",
    name: "Abed",
    order: "39695",
    orderqty: "White",
    color: "Fahim",
    size: "11253",
    total: "74",
    fabreq: "58",
    fabrcv: "4797",
    gsm: "1242",
    consumption: "1162",
  },
  {
    id: "3",
    date: "27-10-2024",
    name: "Abed",
    order: "39695",
    orderqty: "White",
    color: "Fahim",
    size: "11253",
    total: "74",
    fabreq: "58",
    fabrcv: "4797",
    gsm: "1242",
    consumption: "1162",
  },
];

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
      <Paper sx={{ padding: 2, margin: "auto" }}>
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

      <Paper sx={{ overflow: "hidden", padding: "0px", marginTop: "20px" }}>
        <TableContainer>
          <Table >
            <TableHead sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                  color: "white",
                },
              }}>
              <TableRow className="bg-[#5D87FF]">
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Buyer Name</TableCell>
                <TableCell align="center">Order No</TableCell>
                <TableCell align="center">Order Qty.</TableCell>
                <TableCell align="center">Color</TableCell>
                <TableCell align="center">Size</TableCell>
                <TableCell align="center">Total</TableCell>
                <TableCell align="center">Fabric Req.</TableCell>
                <TableCell align="center">Fabric Rcv.</TableCell>
                <TableCell align="center">Fabric/Item GSM</TableCell>
                <TableCell align="center">Consumption</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id} sx={{
                  "& td": {
                    border: "1px solid rgba(224, 224, 224, 1)",
                  },
                }}>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.order}</TableCell>
                  <TableCell align="center">{row.orderqty}</TableCell>
                  <TableCell align="center">{row.color}</TableCell>
                  <TableCell align="center">{row.size}</TableCell>
                  <TableCell align="center">{row.total}</TableCell>
                  <TableCell align="center">{row.fabreq}</TableCell>
                  <TableCell align="center">{row.fabrcv}</TableCell>
                  <TableCell align="center">{row.gsm}</TableCell>
                  <TableCell align="center">{row.consumption}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      href={`/super-admin/cutting-reg/preview/${row.id}`}
                    >
                      <VisibilityIcon fontSize="small" color="primary" />
                    </IconButton>
                    <IconButton href={`/super-admin/cutting-reg/${row.id}`}>
                      <EditIcon fontSize="small" color="secondary" />
                    </IconButton>
                    <IconButton aria-label="delete" color="error">
                      <DeleteIcon fontSize="small" color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default Page;
