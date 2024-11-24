"use client";

import Link from "next/link";
import * as React from "react";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import { TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import SearchIcon from "@mui/icons-material/Search";
import TableContainer from "@mui/material/TableContainer";
import AddOrderModal from "../../_components/AddOrderModal";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Page = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rows = [
    {
      id: "1",
      date: "05-05-2024",
      order_no: "E508TS004",
      color: "Almond",
      style: "Style-1",
    },
  ];
  return (
    <>
      <>
        <div className="mb-5 flex justify-between rounded bg-white p-3 ">
          <h4 className="text-center text-2xl">
            Daily Receive For{" "}
            <span className="font-bold">PRANATAL, France.</span>
          </h4>
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
            <Button
              variant="contained"
              disableElevation
              startIcon={<AddIcon />}
              onClick={handleOpen}
            >
              Add
            </Button>
          </div>
        </div>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead
                sx={{
                  "& th": {
                    border: "1px solid rgba(224, 224, 224, 1)",
                    color: "white",
                  },
                }}
              >
                <TableRow className="bg-[#5D87FF] text-white">
                  <TableCell align="center" className="whitespace-nowrap ">
                    Order Date
                  </TableCell>

                  <TableCell align="center" className="whitespace-nowrap ">
                    Order No
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                  >
                    Colour
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                  >
                    Style No
                  </TableCell>

                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "& td": {
                        border: "1px solid rgba(224, 224, 224, 1)",
                      },
                    }}
                  >
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.date}
                    </TableCell>

                    <TableCell align="center" className="whitespace-nowrap">
                      {row.order_no}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.color}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.style}
                    </TableCell>

                    <TableCell
                      align="center"
                      className="space-x-2 whitespace-nowrap"
                    >
                      <Link
                        href={`/super-admin/daily-receive/order-details/details/${row.id}`}
                      >
                        <button className="text-blue-600">
                          <VisibilityIcon fontSize="small" />
                        </button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </>
      {open && <AddOrderModal open={open} setOpen={handleClose} />}
    </>
  );
};

export default Page;
