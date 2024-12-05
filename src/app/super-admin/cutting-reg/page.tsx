"use client";
import Link from "next/link";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CuttingReg from "./_components/CuttingReg";

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
  return (
    <>
      <>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-5 rounded bg-white p-5 shadow-md">
        <h3 className="text-2xl font-bold">Cutting Register</h3>
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
      </div>
       
        <CuttingReg/>
      </>
    </>
  );
};

export default Page;
