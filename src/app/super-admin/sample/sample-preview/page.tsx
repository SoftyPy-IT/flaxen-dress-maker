"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import flaxen from "../../../../../public/images/logos/flaxen.png";
import Image from "next/image";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const rows = [
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remarks: "2134rf",
  },
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remarks: "2134rf",
  },
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remarks: "2134rf",
  },
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remarks: "2134rf",
  },
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remarks: "2134rf",
  },
];

const page = () => {
  return (
    <DefaultLayout>
      <div className="mb-5 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <Image src={flaxen} alt="img" className="h-10 w-10" />
          <h1>Flaxen Dress Maker Ltd</h1>
        </div>
        <p>
          Factory: Meghdubi; Ward-40, Gazipur City Corporation, Gazipur-1700,
          Bangladesh
        </p>
        <p>Corporate Office : House# 35, Road# 9, Sector# 15, Uttara, Dhaka</p>
        <p>
          Phone : +880-2-8913263, 8916198, Fax : +88-02-8913263 E-mail :
          flaxen@flaxengroup.com, Web : www.flaxengroup.com
        </p>
      </div>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow
                sx={{
                  "& th": {
                    border: "1px solid rgba(224, 224, 224, 1)",
                  },
                }}
              >
                <TableCell align="center" className="whitespace-nowrap">
                  Date
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Name
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Buyer Name
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  colSpan={2}
                >
                  Style & Order No
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sample Type
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sample Quantity
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Sewing Start Time
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Remarks
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
                    {row.name}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.buyerName}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.style}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.orderNo} Tk
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.sampleType}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.sampleQuantity}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.sewingStartTime}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.remarks}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div className="mt-5 flex justify-end gap-5">
        <Button variant="contained" disableElevation startIcon={<PrintIcon />}>
          Print
        </Button>
        <Button
          variant="contained"
          disableElevation
          startIcon={<DownloadIcon />}
        >
          Download
        </Button>
      </div>
    </DefaultLayout>
  );
};

export default page;
