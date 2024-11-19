"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import AddOrderModal from "../../_components/AddOrderModal";

const Page = () => {
  const [open, setOpen] = React.useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

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
        <div className="flex justify-between rounded bg-white p-3 mb-5 ">
          <h4 className="text-center text-2xl">
            Daily Receive For{" "}
            <span className="font-bold">PRANATAL, France.</span>
          </h4>
          <Button
            variant="contained"
            disableElevation
            startIcon={<AddIcon />}
            onClick={handleOpen}
          >
            Add
          </Button>
        </div>

        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer>
            <Table>
              <TableHead
                sx={{
                  "& th": {
                    border: "1px solid rgba(224, 224, 224, 1)",
                  },
                }}
              >
                <TableRow className="bg-[#5D87FF] text-white" sx={{color:"white"}}>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap "
                    sx={{ color: "white" }}
                  >
                    Order Date
                  </TableCell>

                  <TableCell
                    align="center"
                    className="whitespace-nowrap "
                    sx={{ color: "white" }}
                  >
                    Order No
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Colour
                  </TableCell>
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
                  >
                    Style No
                  </TableCell>

                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                    sx={{ color: "white" }}
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
