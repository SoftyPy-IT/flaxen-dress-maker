"use client";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React from "react";
import flaxen from "../../../../../public/images/logos/flaxen.png";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import EditIcon from "@mui/icons-material/Edit";
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

const rows = [
  {
    id: "1",
    // date: "27-10-2024",
    // buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    // factory: "Adury",
    // challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    // received: "...",
    remark: "Remark",
    bin: "Cutting",
  },
  {
    id: "2",
    // date: "27-10-2024",
    // buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    // factory: "Adury",
    // challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    // received: "...",
    remark: "Remark",
    bin: "Cutting",
  },
  {
    id: "3",
    // date: "27-10-2024",
    // buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    // factory: "Adury",
    // challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    // received: "...",
    remark: "Remark",
    bin: "Cutting",
  },
  // Add more rows as needed
];

const Page = () => {
  return (
    <DefaultLayout>
      <div className="a4-paper mx-auto bg-white p-5">
        {/* Header */}
       
     

          <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-4">
            <Image src={flaxen} alt="Company Logo" width={40} height={40} />
            <div >
              <h1 className="text-lg font-bold">Flaxen Dress Maker Ltd</h1>
              <p className="text-sm">
                Factory: Meghdubi, Gazipur-1700, Bangladesh
              </p>
              <p className="text-sm">
                Corporate Office: House# 35, Road# 9, Sector# 15, Uttara, Dhaka
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-left text-sm">
              <PhoneIcon fontSize="small" /> +880-2-8913263, 8916198
            </p>
            <p className="text-left text-sm">
              <FaxIcon fontSize="small" /> +88-02-8913263
            </p>
            <p className="text-left text-sm">
              <EmailIcon fontSize="small" /> flaxen@flaxengroup.com
            </p>
            <p className="text-left text-sm">
              <LanguageIcon fontSize="small" /> www.flaxengroup.com
            </p>
          </div>
        </div>
        <div className="text-center bg-gray-400 p-2  w-[150px] mx-auto mt-2 text-sm text-white">
        <h5 className="">DELIVERY CHALLAN</h5>
        </div>
        <div className="flex justify-between">
          <div className="p-2 space-y-2">
            <p> Buyer&apos;s Name & Address:</p>
            <p className="text-sm">
              <span className="font-bold">John Doe</span>
            </p>
            <p className="text-sm">Dhaka, Bangladesh</p>
          </div>
          <div className="p-2 space-y-3">
            <p> No:</p>
            <p className="text-sm">
              <span className="font-bold">Date:......................</span>
            </p>
            <p className="text-sm">Buyer:......................</p>
            <p className="text-sm">Ref.:......................</p>
          </div>
        </div>

        {/* Table */}
        <Paper elevation={0} className="mt-5">
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow
                  className="bg-[#f3f3f3]"
                  sx={{
                    "& th": {
                      border: "1px solid rgba(224, 224, 224, 1)",
                    },
                  }}
                >
                  {[
                    
                    "Order No",
                    "Color",
                    "Cost (TK)",                   
                    "Dio",
                    "Roll",
                    "Fab",
                    "G.S.M",
                    "G.W.E",
                    "F.W.E",
                    // "Received",
                    "Remark",
                    // "Bin",
                  ].map((header, index) => (
                    <TableCell key={index} align="center" className="text-sm font-bold">
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
                      td: {
                        border: "1px solid rgba(224, 224, 224, 1)",
                      },
                    }}
                  >
                    {/* <TableCell align="center" className="text-sm">{row.date}</TableCell>
                    <TableCell align="center" className="text-sm">{row.buyer}</TableCell> */}
                    <TableCell align="center" className="text-sm">{row.OrderNo}</TableCell>
                    <TableCell align="center" className="text-sm">{row.color}</TableCell>
                    <TableCell align="center" className="text-sm">{row.cost}</TableCell>
                    {/* <TableCell align="center" className="text-sm">{row.factory}</TableCell> */}
                    {/* <TableCell align="center" className="text-sm">{row.challanNo}</TableCell> */}
                    <TableCell align="center" className="text-sm">{row.dio}</TableCell>
                    <TableCell align="center" className="text-sm">{row.roll}</TableCell>
                    <TableCell align="center" className="text-sm">{row.fab}</TableCell>
                    <TableCell align="center" className="text-sm">{row.gsm}</TableCell>
                    <TableCell align="center" className="text-sm">{row.gwe}</TableCell>
                    <TableCell align="center" className="text-sm">{row.fwe}</TableCell>
                    {/* <TableCell align="center" className="text-sm">{row.received}</TableCell> */}
                    <TableCell align="center" className="text-sm">{row.remark}</TableCell>
                    {/* <TableCell align="center" className="text-sm">{row.bin}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

        
      </div>

      {/* a4 */}
      <style jsx>{`
        .a4-paper {
          width: 210mm;
          height: 297mm;
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
      <div className=" mt-6 flex justify-center gap-3">
        <Button variant="contained" disableElevation startIcon={<EditIcon />}>
          Edit
        </Button>
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

export default Page;
