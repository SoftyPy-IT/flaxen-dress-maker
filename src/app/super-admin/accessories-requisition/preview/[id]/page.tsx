"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import flaxen from "../../../../../../../public/images/logos/flaxen.png";
import Image from "next/image";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const rows = [
  {
    id: "1",
    date: "30-10-2024",
    buyer: "John Doe",
    orderNo: "ORD001",
    color: "Pink",
    styleNo: "STY001",
    line: "Line 1",
    floor: "1",
    time: "10:00 AM",
    remark: "No issues",
  },
  {
    id: "2",
    date: "30-10-2024",
    buyer: "Jane Smith",
    orderNo: "ORD002",
    color: "Pink",
    styleNo: "STY002",
    line: "Line 2",
    floor: "2",
    time: "11:00 AM",
    remark: "Pending",
  },
  {
    id: "3",
    date: "30-10-2024",
    buyer: "Jane Smith",
    orderNo: "ORD002",
    color: "Pink",
    styleNo: "STY002",
    line: "Line 2",
    floor: "2",
    time: "11:00 AM",
    remark: "Pending",
  },
  {
    id: "4",
    date: "30-10-2024",
    buyer: "Jane Smith",
    orderNo: "ORD002",
    color: "Pink",
    styleNo: "STY002",
    line: "Line 2",
    floor: "2",
    time: "11:00 AM",
    remark: "Pending",
  },
  // Add additional rows as needed...
];

const signatureRoles = [
  "Cutting Supervisor",
  "Sewing/Finishing Supervisor",
  "Floor Incharge",
  "Production Manager",
  "Store Officer",
];

const Preview = () => {
  return (
    <>
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
          <p>Corporate Office: House# 35, Road# 9, Sector# 15, Uttara, Dhaka</p>
          <p>
            Phone: +880-2-8913263, 8916198, Fax: +88-02-8913263 E-mail:
            flaxen@flaxengroup.com, Web: www.flaxengroup.com
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
                  {[
                    "Date",
                    "Buyer",
                    "Order No",
                    "Color",
                    "Style No",
                    "Line",
                    "Floor",
                    "Time",
                    "Remark",
                  ].map((header) => (
                    <TableCell
                      align="center"
                      key={header}
                      className="whitespace-nowrap"
                    >
                      {header}
                    </TableCell>
                  ))}
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
                      {row.buyer}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.orderNo}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.color}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.styleNo}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.line}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.floor}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.time}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.remark}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          {signatureRoles.map((role, index) => (
            <div key={index} className="mt-14 text-center">
              <div className="mb-2 border-b border-black" />
              <span>{role}</span>
              <div>Signature</div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-end gap-5">
          <Button
            variant="contained"
            disableElevation
            startIcon={<PrintIcon />}
          >
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
    </>
  );
};

export default Preview;
