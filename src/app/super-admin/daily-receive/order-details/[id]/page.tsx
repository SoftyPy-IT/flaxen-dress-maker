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

const Page = () => {
  const company = [
    {
      id: 1,
      name: "PRANATAL",
      country: "France",
    },
  ];

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
      <DefaultLayout>
        <h3 className="mb-4 text-center text-2xl font-bold">
          PRANATAL, France.{" "}
        </h3>
        {/* <div className="flex  bg-white shadow-md rounded p-5 mb-5"> */}

        {/* <Link href="/super-admin/daily-receive/add-daily-receive">
          <Button variant="contained" disableElevation startIcon={<AddIcon />}>
            Add
          </Button>
        </Link> */}
        {/* </div> */}
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
                <TableRow className="bg-[#5D87FF]">
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                  >
                    Order Date
                  </TableCell>

                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                  >
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
                      <Link href={`/super-admin/daily-receive/${row.id}`}>
                        <button className="text-green-600">
                          <EditIcon fontSize="small" />
                        </button>
                      </Link>
                      <button className="text-red-600">
                        <DeleteIcon fontSize="small" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </DefaultLayout>
    </>
  );
};

export default Page;
