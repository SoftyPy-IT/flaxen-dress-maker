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
import { TextField, Grid } from "@mui/material";
import { useState } from "react";
import { Box, IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Image from "next/image";
import flaxen from "../../../../../../../public/images/logos/flaxen.png";

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
     
    ],
  },
  {
    id: 2,
    lineNo: 102,
    product: 582,
    challans: [
      { challanNo: 4, qty: 60 },
      { challanNo: 5, qty: 80 },
    ],
  },
  {
    id: 3,
    lineNo: 108,
    product: 548,
    challans: [
      { challanNo:2, qty: 90 },
      { challanNo: 5, qty: 100 },
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
    challans: [{ challanNo: 4, qty: 110 }],
  },
];

const Page = () => {
  // Get unique challan numbers across all data
  const challanNos = Array.from(
    new Set(
      data.flatMap((line) => line.challans.map((challan) => challan.challanNo)),
    ),
  );

  // Initializing dailyReceive with objects that hold their own 'challanQTY' array.
  const [dailyReceive, setDailyReceive] = useState([{ challanQTY: [""] }]);

  const handleAddDailyReceive = () => {
    // Add a new mother component (with its own challanQTY).
    setDailyReceive([...dailyReceive, { challanQTY: [""] }]);
  };

  const handleDeleteDailyReceive = (index: number) => {
    if (dailyReceive.length > 1) {
      const updatedDailyReceive = dailyReceive.filter((_, i) => i !== index);
      setDailyReceive(updatedDailyReceive);
    }
  };

  const handleAddChallanQTY = (index: number) => {
    // Add a new child (challanQTY) to the specific mother component.
    const updatedDailyReceive = [...dailyReceive];
    updatedDailyReceive[index].challanQTY.push(""); // Add a new empty string (representing a new challan)
    setDailyReceive(updatedDailyReceive);
  };

  const handleDeleteChallanQTY = (motherIndex: number, childIndex: number) => {
    if (dailyReceive[motherIndex].challanQTY.length > 1) {
      const updatedDailyReceive = [...dailyReceive];
      const updatedChallanQTY = updatedDailyReceive[
        motherIndex
      ].challanQTY.filter((_, i) => i !== childIndex);
      updatedDailyReceive[motherIndex].challanQTY = updatedChallanQTY;
      setDailyReceive(updatedDailyReceive);
    }
  };

  return (
    <>
      <DefaultLayout>
      <div className="mb-3 text-center gap-2">
          <div className="mb-3 flex items-center justify-center gap-2">
            <Image src={flaxen} alt="img" className="h-10 w-10" />
            <h1>Flaxen Dress Maker Ltd</h1>
          </div>
          <p>
            Factory: Meghdubi; Ward-40, Gazipur City Corporation, Gazipur-1700,
            Bangladesh
          </p>
          <p>
            Corporate Office : House# 35, Road# 9, Sector# 15, Uttara, Dhaka
          </p>
          <p>
            Phone : +880-2-8913263, 8916198, Fax : +88-02-8913263 E-mail :
            flaxen@flaxengroup.com, Web : www.flaxengroup.com
          </p>
        </div>
        <div>
          
          <h3 className="text-center font-normal">
          Daily Receive For <span className="font-bold">PRANATAL, France.</span></h3>
          {/* <h4 className="text-center font-bold">
            Order No:{" "}
            <span className="text-center font-normal"> E508TS004</span>
          </h4> */}
          <h4 className="text-center font-bold">
            Color: <span className="text-center font-normal"> Almond </span>
          </h4>
          <h4 className="text-center font-bold">
            Style No: <span className="text-center font-normal"> 01</span>
          </h4>

          <div className="m-3 flex justify-between">
          <h4 className="text-center font-bold">
            Order No:{" "}
            <span className="text-center font-normal"> E508TS004</span>
          </h4>
            <h5>Date: 05-12-2024</h5>
            {/* <Link href="/super-admin/daily-receive/add-daily-receive"> */}
            {/* <Button
              variant="contained"
              disableElevation
              startIcon={<AddIcon />}
              href="/super-admin/daily-receive/order-details/details/add-daily-receive"
            >
              Add
            </Button> */}
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
                    <TableCell sx={{ color: "white" }}>
                      Challan No
                    </TableCell>
                    {/* Render Line Nos as headers */}
                    {data.map((row, index) => (
                      <TableCell
                        key={index}
                        // className="whitespace-nowrap text-white"
                        sx={{ color: "white" }}
                        align="center"
                      >
                        Line No {row.lineNo}
                      </TableCell>
                    ))}
                    {/* <TableCell
                    align="center"
                    className="whitespace-nowrap text-white"
                  >
                    Action
                  </TableCell> */}
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableCell className="bg-[#dde5f8]">
                    Total Product
                  </TableCell>
                  {data.map((row, index) => (
                    <TableCell
                      key={index}
                      align="center"
                      className="bg-[#dde5f8] whitespace-nowrap"
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
                          <TableCell key={index} align="center">
                            {challan ? challan.qty : "-"}
                          </TableCell>
                        );
                      })}

                      {/* Action buttons */}
                      {/* <TableCell
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
                    </TableCell> */}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </div>

        <div className="mt-4">
          <Paper sx={{ padding: 2 }}>
            <h3 className="mb-3 text-center text-2xl font-bold">
            Daily Receive
            </h3>

            {dailyReceive.map((mother, motherIndex) => (
              <div key={motherIndex} className="mb-4">
                <div className="mb-4 gap-4">
                  {/* 1st part: Mother component */}
                  <div className="flex flex-1 gap-2 rounded border p-2">
                    <div className="flex w-full gap-2">
                      <TextField
                        label="Line No"
                        name="styleNo"
                        fullWidth
                        size="medium"
                      />
                      <TextField
                        label="Total Product"
                        name="orderNo"
                        size="medium"
                        fullWidth
                      />
                    </div>

                    <div className="w-full gap-4 border">
                      {mother.challanQTY.map((_, qtyIndex) => (
                        <div
                          key={qtyIndex}
                          className="flex w-[650px] space-x-2 p-1"
                        >
                          <div className="flex w-[550px] space-x-2">
                            <TextField
                              label="Challan No"
                              name="description"
                              size="medium"
                              fullWidth
                              sx={{ width: "250px" }}
                            />
                            <TextField
                              label="QTY"
                              name="description"
                              size="medium"
                              fullWidth
                              sx={{ width: "250px" }}
                            />
                          </div>
                          <div className="flex w-[100px] items-center space-x-2">
                            {/* Add/Remove buttons for Challan */}
                            <IconButton
                              onClick={() => handleAddChallanQTY(motherIndex)}
                              sx={{
                                backgroundColor: "#e1e4f9",
                                "&:hover": { backgroundColor: "#d0d3f0" },
                              }}
                            >
                              <AddIcon />
                            </IconButton>
                            <IconButton
                              onClick={() =>
                                handleDeleteChallanQTY(motherIndex, qtyIndex)
                              }
                              sx={{
                                backgroundColor: "#e1e4f9",
                                "&:hover": { backgroundColor: "#d0d3f0" },
                              }}
                            >
                              <RemoveCircleOutlineIcon className="text-red-600" />
                            </IconButton>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2nd part: Add/Remove Mother Component */}
                  <div className="mt-2 flex items-center justify-start gap-2">
                    <Button
                      onClick={handleAddDailyReceive}
                      type="submit"
                      variant="contained"
                      size="medium"
                    >
                      Add
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteDailyReceive(motherIndex)}
                    >
                      Remove
                    </Button>
                    {/* <IconButton
                      onClick={handleAddDailyReceive}
                      sx={{
                        backgroundColor: "#e1e4f9",
                        "&:hover": { backgroundColor: "#d0d3f0" },
                      }}
                    >
                      <AddIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => handleDeleteDailyReceive(motherIndex)}
                      sx={{
                        backgroundColor: "#e1e4f9",
                        "&:hover": { backgroundColor: "#d0d3f0" },
                      }}
                    >
                      <RemoveCircleOutlineIcon className="text-red-600" />
                    </IconButton> */}
                  </div>
                </div>
              </div>
            ))}

            <Grid item xs={12}>
              <div className="mt-4 flex justify-end">
                <Button
                  type="submit"
                  variant="contained"
                  size="medium"
                  disableElevation
                >
                  Add Daily Receive
                </Button>
              </div>
            </Grid>
          </Paper>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Page;
