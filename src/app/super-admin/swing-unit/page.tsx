"use client";
import Link from "next/link";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SwingUnit from "./_components/SwingUnit";



const Page = () => {
  return (
    <>
      <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-5 rounded bg-white p-5 shadow-md">
        <h3 className="text-2xl font-bold">Swing Unit</h3>
        <div className=" flex w-[800px] items-center gap-3">
          <TextField
            name="date"
            type="date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            size="small"
          />
          <h5>to</h5>
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

          <Link href="/super-admin/swing-unit/add-swing-unit">
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
       
        <SwingUnit/>
      </>
    </>
  );
};

export default Page;
