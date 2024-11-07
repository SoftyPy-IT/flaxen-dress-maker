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
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import { Button } from "@mui/material";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const page = () => {
  const rows = [
    {
      id: "1",
      description: "Description of goods",
      quantity: "Quantity",
      noOfPack: "123",
      remarks: "Remarks",
    },
    {
      id: "1",
      description: "Description of goods",
      quantity: "Quantity",
      noOfPack: "123",
      remarks: "Remarks",
    },
    {
      id: "1",
      description: "Description of goods",
      quantity: "Quantity",
      noOfPack: "123",
      remarks: "Remarks",
    },
    {
      id: "1",
      description: "Description of goods",
      quantity: "Quantity",
      noOfPack: "123",
      remarks: "Remarks",
    },
    {
      id: "1",
      description: "Description of goods",
      quantity: "Quantity",
      noOfPack: "123",
      remarks: "Remarks",
    },
  ];
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
            <TableHead
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                },
              }}
            >
              <TableRow>
                <TableCell align="center" className="whitespace-nowrap">
                  SL No
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Description of goods
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Quantity
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  No. of Pack&apos;s
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Remarks
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  sx={{
                    "& td": {
                      border: "1px solid rgba(224, 224, 224, 1)",
                    },
                  }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">{row.quantity}</TableCell>
                  <TableCell align="center">{row.noOfPack}</TableCell>
                  <TableCell align="center">{row.remarks}</TableCell>
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
