"use client";
import React from "react";

import { Box, Button, Grid } from "@mui/material";
import FlaxenModal from "@/components/shared/Modal";
import FlaxenForm from "@/components/Forms/Form";
import FlaxenMultiSelect from "@/components/Forms/MultiSelect";
import FlaxenSelect from "@/components/Forms/Select";
import FlaxenInput from "@/components/Forms/Input";
import FlaxenTextField from "@/components/Forms/TextField";
import FlaxenTextArea from "@/components/Forms/TextArea";

export type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeclineModal = ({ open, setOpen }: TProps) => {
  const handleSubmit = () => {
    console.log();
  };

  return (
    <FlaxenModal
      sx={{ width: "600px", margin: " auto" }}
      open={open}
      setOpen={setOpen}
      title="Decline"
    >
      <Box padding="5px 10px 10px 10px">
        {/* all content */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="bg-white">
              <FlaxenForm onSubmit={handleSubmit} >
               
                <h4>Why Decline Please Write in Details - </h4>

                <FlaxenTextField name="field"/>
              </FlaxenForm>
              <div className="flex justify-end mt-2">
                <Button  variant="contained" sx={{}}>Send</Button>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </FlaxenModal>
  );
};

export default DeclineModal;
