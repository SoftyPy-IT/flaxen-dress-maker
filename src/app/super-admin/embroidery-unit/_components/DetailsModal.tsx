"use client";
import React from "react";

import { Box, Button, Grid } from "@mui/material";
import FlaxenModal from "@/components/shared/Modal";
import FlaxenForm from "@/components/Forms/Form";
import FlaxenMultiSelect from "@/components/Forms/MultiSelect";
import FlaxenSelect from "@/components/Forms/Select";
import FlaxenTextField from "@/components/Forms/TextField";

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DetailsModal = ({ open, setOpen }: TProps) => {
  const handleSubmit = () => {
    console.log();
  };

  return (
    <FlaxenModal
      sx={{ width: "800px", margin: " auto" }}
      open={open}
      setOpen={setOpen}
      title="See Details"
    >
      <Box padding="5px 10px 10px 10px">
        {/* all content */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="bg-white">
              <FlaxenForm onSubmit={handleSubmit} >

<FlaxenTextField name="details"/>
                {/* <FlaxenSelect
                  items={["Cutting", "Swing", "Embroidery"]}
                  fullWidth
                  name="send"
                  label="Send To"
                /> */}
              </FlaxenForm>
              <div className="flex justify-end mt-2">
                <Button  variant="contained" sx={{}}>OK</Button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </FlaxenModal>
  );
};

export default DetailsModal;
