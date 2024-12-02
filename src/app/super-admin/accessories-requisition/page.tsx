"use client";
import * as React from "react";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccessoriesRequisition from "./_components/AccessoriesRequisition";

const Page = () => {

  return (
    <>
      <>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-5 rounded bg-white p-5 shadow-md">
          <h3 className="text-2xl font-bold">Accessories Requisition</h3>
          <div className=" flex w-[500px] items-center gap-3">
            <TextField
              name="date"
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
              size="small"
            />

            <TextField
              size="small"
              variant="outlined"
              placeholder="Search by Order"
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
              fullWidth
            />

            <Link href="/super-admin/accessories-requisition/add-accessories-requisition">
              <Button
                variant="contained"
                disableElevation
                startIcon={<AddIcon />}
              >
                Add
              </Button>
            </Link>
          </div>
        </div>

        <AccessoriesRequisition/>
      </>
    </>
  );
};

export default Page;
