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
import Link from "next/link";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Mock Data (you can replace this with actual data fetching logic)
const data = [
  {
    id: 1,
    lineNo: 96,
    product: 274,
    challans: [
      { challanNo: 1, qty: 41 },
      { challanNo: 2, qty: 41 },
      { challanNo: 3, qty: 16 },
      { challanNo: 4, qty: 40 },
      { challanNo: 5, qty: 40 },
      { challanNo: 6, qty: 16 },
      { challanNo: 7, qty: 16 },
      { challanNo: 8, qty: 40 },
      { challanNo: 9, qty: 40 },
      { challanNo: 10, qty: 16 },
    ],
  },
  {
    id: 2,
    lineNo: 102,
    product: 582,
    challans: [
      { challanNo: 4, qty: 60 },
      { challanNo: 5, qty: 80 },
      { challanNo: 7, qty: 60 },
    ],
  },
  {
    id: 3,
    lineNo: 108,
    product: 548,
    challans: [
      { challanNo: 6, qty: 90 },
      { challanNo: 8, qty: 100 },
    ],
  },
  {
    id: 4,
    lineNo: 116,
    product: 402,
    challans: [
      { challanNo: 3, qty: 60 },
      { challanNo: 5, qty: 100 },
    ],
  },
  {
    id: 5,
    lineNo: 122,
    product: 336,
    challans: [
      { challanNo: 2, qty: 90 },
      { challanNo: 3, qty: 50 },
    ],
  },
  {
    id: 6,
    lineNo: 128,
    product: 270,
    challans: [
      { challanNo: 2, qty: 90 },
      { challanNo: 3, qty: 50 },
    ],
  },
  {
    id: 6,
    lineNo: 136,
    product: 266,
    challans: [{ challanNo: 9, qty: 110 }],
  },
];

const Page = () => {
  // Get unique challan numbers across all data
  const challanNos = Array.from(
    new Set(
      data.flatMap((line) => line.challans.map((challan) => challan.challanNo)),
    ),
  );

  return (
    <>
      <DefaultLayout>
        <h3 className="text-center font-bold">PRANATAL, France</h3>
        <h4 className="text-center font-bold">
          Order No: <span className="text-center font-normal"> E508TS004</span>
        </h4>
        <h4 className="text-center font-bold">
          Color: <span className="text-center font-normal"> Almond </span>
        </h4>
        <h4 className="text-center font-bold">
          Style No: <span className="text-center font-normal"> 01</span>
        </h4>

        <div className="m-3 flex justify-between">
          <h5>Date: 05-12-2024</h5>
          {/* <Link href="/super-admin/daily-receive/add-daily-receive"> */}
          <Button
            variant="contained"
            disableElevation
            startIcon={<AddIcon />}
            href="/super-admin/daily-receive/order-details/details/add-daily-receive"
          >
            Add
          </Button>
          {/* </Link> */}
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
                <TableRow className="bg-[#5D87FF]">
                  <TableCell className="whitespace-nowrap text-white">
                    Challan No
                  </TableCell>
                  {/* Render Line Nos as headers */}
                  {data.map((row, index) => (
                    <TableCell
                      key={index}
                      className="whitespace-nowrap text-white"
                    >
                      Line No {row.lineNo}
                    </TableCell>
                  ))}
                  <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableCell>Total Product</TableCell>
                {data.map((row, index) => (
                  <TableCell
                    key={index}
                    className="whitespace-nowrap font-bold"
                  >
                    {row.product}
                  </TableCell>
                ))}
                {/* Rows for each Challan Number */}
                {challanNos.map((challanNo) => (
                  <TableRow key={challanNo}>
                    {/* Show Challan No in the first column */}
                    <TableCell>{`Cha. No ${challanNo}`}</TableCell>

                    {/* Show quantities for each line under respective columns */}
                    {data.map((row, index) => {
                      const challan = row.challans.find(
                        (challan) => challan.challanNo === challanNo,
                      );
                      return (
                        <TableCell key={index}>
                          {challan ? challan.qty : "-"}
                        </TableCell>
                      );
                    })}

                    {/* Action buttons */}
                    <TableCell
                      align="center"
                      className="space-x-2 whitespace-nowrap"
                    >
                      <Link
                        href={`/super-admin/daily-receive/order-details/details/${challanNo}`}
                      >
                        <button className="text-blue-600">
                          <VisibilityIcon fontSize="small" />
                        </button>
                      </Link>
                      <Link href={`/super-admin/daily-receive/${challanNo}`}>
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
