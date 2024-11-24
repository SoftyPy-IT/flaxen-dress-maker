"use client"

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import flaxen from "../../../../../assets/images/logo/flaxen.png";
import Image from "next/image";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import TopSection from "@/components/shared/TopSection/TopSection";
import EditIcon from "@mui/icons-material/Edit";

function createData(
  id: number,
  buyer: string,
  orderNo: string,
  item: string,
  color: string,
  styleNo: string,
  line: string,
  floor: string,
  date: string,
  time: string,
  remark: string
) {
  return {
    id,
    buyer,
    orderNo,
    item,
    color,
    styleNo,
    line,
    floor,
    date,
    time,
    remark,
  };
}

const rows = [
  createData(
    1,
    "John Doe",
    "ORD001",
    "Bottom",
    "Pink",
    "STY001",
    "Line 1",
    "1",
    "2024-10-30",
    "10:00 AM",
    "No issues"
  ),
  createData(
    2,
    "Jane Smith",
    "ORD002",
    "Bottom",
    "Pink",
    "STY002",
    "Line 2",
    "2",
    "2024-10-30",
    "11:00 AM",
    "Pending"
  ),
  createData(
    3,
    "Jane Smith",
    "ORD003",
    "Bottom",
    "Pink",
    "STY003",
    "Line 3",
    "3",
    "2024-10-30",
    "11:00 AM",
    "Pending"
  ),
  createData(
    4,
    "Jane Smith",
    "ORD004",
    "Bottom",
    "Pink",
    "STY004",
    "Line 4",
    "4",
    "2024-10-30",
    "11:00 AM",
    "Pending"
  ),
  createData(
    5,
    "Jane Smith",
    "ORD005",
    "Bottom",
    "Pink",
    "STY005",
    "Line 5",
    "5",
    "2024-10-30",
    "11:00 AM",
    "Pending"
  ),
  createData(
    6,
    "Jane Smith",
    "ORD006",
    "Bottom",
    "Pink",
    "STY006",
    "Line 6",
    "6",
    "2024-10-30",
    "11:00 AM",
    "Pending"
  ),
  createData(
    7,
    "Jane Smith",
    "ORD007",
    "Bottom",
    "Pink",
    "STY007",
    "Line 7",
    "7",
    "2024-10-30",
    "11:00 AM",
    "Pending"
  ),
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
      {/* 210mm x 297mm */}
      <style jsx>{`
        .a4-paper {
          width: 297mm;
          height: 210mm;
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
        }
        @media print {
          .a4-paper {
            width: auto;
            height: auto;
            box-shadow: none;
            margin: 0;
            padding: 20mm;
            page-break-before: always;
            font-size: 12px;
          }
          .print-hidden {
            display: none;
          }
        }
      `}</style>
      <div className="a4-paper mx-auto mb-20">
        <div className="a4-paper mx-auto bg-white p-5">
          <TopSection />
          <div className="flex justify-center">
            <h3 className="my-2 inline-block  bg-gray-400 px-1 uppercase text-white">
              Stock
            </h3>
          </div>

          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow
                    sx={{
                      "& th": {
                        border: "1px solid rgba(224, 224, 224, 1)",
                        padding: "8px",
                        background: "#5D87FF",
                        color: "white",
                      },
                    }}
                  >
                    {[
                      "Date",
                "Buyer Name",
                "Order No",
                "Order Qty.",
                "Color",
                "Size",
                "Total",
                "Fabric Req.",
                "Fabric Rcv.",
                "Fabric/Item GSM",
                "Consumption",
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
                          padding: "8px",
                        },
                      }}
                    >
                      <TableCell sx={{ border: "1px solid black" }}>
                  {row.id}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.buyer}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.orderNo}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.item}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.color}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.styleNo}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.line}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.floor}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.date}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
                  {row.time}
                </TableCell>
                <TableCell sx={{ border: "1px solid black" }} align="center">
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
              <div key={index}>
                <div className="mb-[10px] mt-10 border-b border-black text-center" />
                <span>{role}</span> <br />
                <div />
                <h5 className="text-center">Signature</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 flex justify-end gap-5">
          <Button variant="contained" disableElevation startIcon={<EditIcon />}>
            Edit
          </Button>
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
      </div>
    </>
   
  );
};

export default Preview;
