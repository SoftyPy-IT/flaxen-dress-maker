"use client";
import React from "react";
import FlaxenModal from "@/components/shared/Modal";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddUnitModal = ({ open, setOpen }: TProps) => {
  return (
    <FlaxenModal
      sx={{ width: "500px", margin: " auto" }}
      open={open}
      setOpen={setOpen}
      title="Add Unit"
    >
      <Box padding="5px 10px 10px 10px">
        {/* all content */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="bg-white">
              <div className="space-y-2">
              <TextField
                    label="Unit Name"
                    name="unit"
                    fullWidth
                    size="medium"
                  />
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

export default AddUnitModal;
