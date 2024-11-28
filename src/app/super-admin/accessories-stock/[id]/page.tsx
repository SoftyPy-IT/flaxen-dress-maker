"use client";
import * as React from "react";
import { Button, TextField, Paper, Grid, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { SelectChangeEvent } from "@mui/material/Select";

const Page = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Paper sx={{ padding: 2, margin: "auto" }}>
      <h3 className="text-2xl text-center font-bold mb-5">
        Edit Accessories Stock
      </h3>
      <div>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
              <TextField label="S. No" name="no" fullWidth size="medium" />
            </Grid>

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
                label="Challan No"
                name="challan"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Product Name"
                name="item"
                fullWidth
                size="medium"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Quantity"
                name="quantity"
                fullWidth
                size="medium"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <FormControl fullWidth>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">Unit</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField label="Price" name="price" fullWidth size="medium" />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                label="Supplier"
                name="supplier"
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
      </div>
    </Paper>
  );
};

export default Page;
