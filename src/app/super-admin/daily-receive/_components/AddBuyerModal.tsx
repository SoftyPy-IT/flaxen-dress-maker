"use client";
import React from "react";
import FlaxenModal from "@/components/shared/Modal";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddBuyerModal = ({ open, setOpen }: TProps) => {
  return (
    <FlaxenModal
      sx={{ width: "900px", margin: " auto" }}
      open={open}
      setOpen={setOpen}
      title="Add Buyer"
    >
      <Box padding="5px 10px 10px 10px">
        {/* all content */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="bg-white">
              <div className="space-y-2">
                <div className="flex gap-2">
                  <TextField
                    label="Buyer Name"
                    name="buyer"
                    fullWidth
                    size="medium"
                  />
                  <TextField
                    label="Country"
                    name="country"
                    size="medium"
                    fullWidth
                  />
                </div>
                <div className="flex gap-2">
                  <TextField
                    label="Colour"
                    name="color"
                    fullWidth
                    size="medium"
                  />
                  <TextField
                    label="Style No"
                    name="style"
                    size="medium"
                    fullWidth
                  />
                </div>
                <div className="flex gap-2">
                  <TextField
                    label="Total Order"
                    name="totalorder"
                    size="medium"
                    fullWidth
                  />
                  <TextField
                    label="Last Order Date"
                    name="date"
                    fullWidth
                    size="medium"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button
                  variant="contained"
                  disableElevation
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </FlaxenModal>
  );
};

export default AddBuyerModal;