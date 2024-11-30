"use client";
import React from "react";

import { Box, Button, Grid } from "@mui/material";
import FlaxenModal from "@/components/shared/Modal";

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const StockSendModal = ({ open, setOpen }: TProps) => {
  const handleSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FlaxenModal
      sx={{ width: "800px", margin: " auto" }}
      open={open}
      setOpen={setOpen}
      title="Send"
    >
      <Box padding="5px 10px 10px 10px">
        {/* all content */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="bg-white">
              <h3 className="mb-3 uppercase">Send</h3>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </FlaxenModal>
  );
};

export default StockSendModal;
