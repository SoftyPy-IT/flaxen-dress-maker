"use client";

import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { TextField, Grid } from "@mui/material";
import { useState } from "react";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Image from "next/image";
import flaxen from "../../../../../../../public/images/logos/flaxen.png";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import TopSection from "@/components/shared/TopSection/TopSection";
import FlaxenForm from "@/components/Forms/Form";
import FlaxenDatePicker from "@/components/Forms/DatePicker";
import FlaxenInput from "@/components/Forms/Input";

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
      { challanNo: 2, qty: 90 },
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
    setDailyReceive([...dailyReceive, { challanQTY: [""] }]);
  };
  
  const handleDeleteDailyReceive = (index: number) => {
    if (dailyReceive.length > 1) {
      const updatedDailyReceive = dailyReceive.filter((_, i) => i !== index);
      setDailyReceive(updatedDailyReceive);
    }
  };

  const handleAddChallanQTY = (index: number) => {
    const updatedDailyReceive = [...dailyReceive];
    updatedDailyReceive[index].challanQTY.push("");
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
  const handleSubmit = () => {
    console.log()
  };

  return (
    <>
      <>
        <TopSection />

        <div className="mt-2">
          <h4 className="text-center font-normal">
            Daily Receive For{" "}
            <span className="font-bold">PRANATAL, France.</span>
          </h4>

          <h5 className="text-center font-bold">
            Color: <span className="text-center font-normal"> Almond </span>
          </h5>
          <h5 className="text-center font-bold">
            Style No: <span className="text-center font-normal"> 01</span>
          </h5>
          <h5 className="text-center font-bold">
            Order Quantity: <span className="text-center font-normal"> 1000</span>
          </h5>
          <h5 className="text-center font-bold">
            Order Complete: <span className="text-center font-normal"> 1000</span>
          </h5>
          

          <div className="m-3 flex justify-between">
            <h5 className="text-center font-bold">
              Order Complete:{" "}
              <span className="text-center font-normal"> 500</span>
            </h5>
            <h5>Date: 06-12-2024</h5>
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
                  <TableRow
                    className="bg-[#5D87FF]"
                    sx={{
                      "& td": {
                        border: "1px solid rgba(224, 224, 224, 1)",
                      },
                    }}
                  >
                    <TableCell sx={{ color: "white" }}>Challan No</TableCell>

                    {data.map((row, index) => (
                      <TableCell
                        key={index}
                        sx={{ color: "white" }}
                        align="center"
                      >
                        Line No {row.lineNo}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {challanNos.map((challanNo) => (
                    <TableRow key={challanNo}  sx={{
                      "& td": {
                        border: "1px solid rgba(224, 224, 224, 1)",
                      },
                    }}>
                      <TableCell>{`Cha. No ${challanNo}`}</TableCell>

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
                    </TableRow>
                  ))}

                  <TableCell className="bg-[#dde5f8]">Total Product</TableCell>
                  {data.map((row, index) => (
                    <TableCell
                      key={index}
                      align="center"
                      className="whitespace-nowrap bg-[#dde5f8]"
                    >
                      {row.product}
                    </TableCell>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          <div className="m-3 flex justify-between">
          <h5 className="text-center font-bold">
              Order Complete:{" "}
              <span className="text-center font-normal"> 500</span>
            </h5>
            <h5>Date: 05-12-2024</h5>
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
                  <TableRow className="bg-[#5D87FF]">
                    <TableCell sx={{ color: "white" }}>Challan No</TableCell>

                    {data.map((row, index) => (
                      <TableCell
                        key={index}
                        sx={{ color: "white" }}
                        align="center"
                      >
                        Line No {row.lineNo}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {challanNos.map((challanNo) => (
                    <TableRow key={challanNo}  sx={{
                      "& td": {
                        border: "1px solid rgba(224, 224, 224, 1)",
                      },
                    }}>
                      <TableCell>{`Cha. No ${challanNo}`}</TableCell>

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

                    </TableRow>
                  ))}

                  <TableCell className="bg-[#dde5f8]">Total Product</TableCell>
                  {data.map((row, index) => (
                    <TableCell
                      key={index}
                      align="center"
                      className="whitespace-nowrap bg-[#dde5f8]"
                    >
                      {row.product}
                    </TableCell>
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
                  <FlaxenForm onSubmit={handleSubmit}>
                  <div className="flex flex-1 gap-2 rounded border p-2">
                    <div className="flex w-full gap-2">
                      {/* <FlaxenDatePicker
                        name="Date"                        
                        fullWidth
                        size="medium"
                      /> */}
                      <FlaxenInput
                        label="Line No"
                        name="styleNo"
                        fullWidth
                        size="medium"
                      />
                      <FlaxenInput
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
                            <FlaxenInput
                              label="Challan No"
                              name="description"
                              size="medium"
                              fullWidth
                              sx={{ width: "250px" }}
                            />
                            <FlaxenInput
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
                  </div>
                </FlaxenForm>
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
      </>
    </>
  );
};

export default Page;


// note : 
// in this code the table added automatically by date. and new date table all data show 0