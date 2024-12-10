"use client";
import Link from "next/link";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CuttingReg from "./_components/CuttingReg";
import FlaxenForm from "@/components/Forms/Form";
import FlaxenDatePicker from "@/components/Forms/DatePicker";

const Page = () => {
  const handleSubmit = () => {
    console.log();
  };

  return (
    <>
      <>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-5 rounded bg-white p-5 shadow-md">
          <h3 className="text-2xl font-bold">Cutting Register</h3>
          <FlaxenForm onSubmit={handleSubmit}>
            <div className=" flex w-[800px] items-center gap-3">
              <FlaxenDatePicker name="date" fullWidth size="small" />
              <h5>to</h5>
              <FlaxenDatePicker name="date" fullWidth size="small" />

              <TextField
                size="small"
                variant="outlined"
                placeholder="Search by Order"
                InputProps={{
                  endAdornment: <SearchIcon />,
                }}
                fullWidth
              />

              <Link href="/super-admin/cutting-reg/add-cutting-reg">
                <Button
                  variant="contained"
                  disableElevation
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
              </Link>
            </div>
          </FlaxenForm>
        </div>

        <CuttingReg />
      </>
    </>
  );
};

export default Page;
