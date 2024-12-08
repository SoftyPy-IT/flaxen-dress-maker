"use client";

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
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import EditIcon from "@mui/icons-material/Edit";

const Page = () => {
  const rows = [
    {
      id: "1",
      receiverName: "John Doe",
      item: "Item",
      color: "Black",
      line: "Line 1",
      style: "Style A",
      quantity: 25,
      reject: 2,
      margeReject: 1,
      total: 24,
      totalDescription: "Good",
      remark: "Delivered",
    },
    {
      id: "2",
      receiverName: "John Doe",
      item: "Item",
      color: "Red",
      line: "Line 2",
      style: "M",
      quantity: 15,
      reject: 1,
      margeReject: 0,
      total: 14,
      totalDescription: "Average",
      remark: "Pending",
    },
    {
      id: "3",
      receiverName: "John Doe",
      item: "Item",
      color: "Red",
      line: "Line 2",
      style: "M",
      quantity: 11,
      reject: 1,
      margeReject: 0,
      total: 10,
      totalDescription: "Average",
      remark: "Pending",
    },
    {
      id: "4",
      receiverName: "John Doe",
      item: "Item",
      color: "Red",
      line: "Line 2",
      style: "M",
      quantity: 10,
      reject: 2,
      margeReject: 2,
      total: 12,
      totalDescription: "Average",
      remark: "Pending",
    },
  ];

  // Calculate the total quantity
  // const totalQuantity = rows.reduce((sum, row) => sum + row.quantity, 0);

  const signatureRoles = [
    "Receiver's Signature",
    "Receiver's Name",
    "Date",
    "",
    "Authorised Signature",
  ];

  return (
    <>
      <div className="a4-paper mx-auto bg-white p-5">
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-4">
            <Image src={flaxen} alt="Company Logo" width={40} height={40} />
            <div>
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
        <div className="flex justify-center p-2">
          <h5 className="mx-auto mt-2 inline-block rounded-md  bg-blue-500 p-2 text-center font-bold uppercase text-white">
            Work delivery CHALLAN
          </h5>
        </div>

        <div className="mb-4 flex justify-between items-center content-center pl-[20px] pr-[60px]">
       
          <div className=" space-y-2">
            <h5>
              To: <span className="font-bold underline">Cutting</span>
            </h5>
            <h5>
              Receiver Name:{" "}
              <span className="font-bold underline">John Doe</span>
            </h5>
            <h5>
              Buyer Name: <span className="font-bold underline">Taludker</span>
            </h5>
            <h5>
              Order No: <span className="font-bold underline">24579641</span>
            </h5>
          </div>
        
          <div className="space-y-2 ">
            <h5>
              Date: <span className="font-bold underline">05.05.2024</span>
            </h5>
            <h5>
              Gate Pass No: <span className="font-bold underline">5</span>
            </h5>
            <h5>
              Challan No: <span className="font-bold underline">124563</span>
            </h5>
            <h5>
              Quantity: <span className="font-bold underline">1245</span>
            </h5>
          </div>
        </div>

        <Paper elevation={0}>
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
                  <TableCell align="center" className="text-sm font-semibold">
                    Sl No.
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Description
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Line
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Color
                  </TableCell>                  
                  <TableCell align="center" className="text-sm font-semibold">
                    Style
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Quantity
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Reject
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Marge Reject
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Total
                  </TableCell>                  
                  <TableCell align="center" className="text-sm font-semibold">
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
                    <TableCell align="center">{row.totalDescription}</TableCell>
                    <TableCell align="center">{row.line}</TableCell>
                    <TableCell align="center">{row.color}</TableCell>
                    <TableCell align="center">{row.style}</TableCell>
                    <TableCell align="center">{row.quantity}</TableCell>
                    <TableCell align="center">{row.reject}</TableCell>
                    <TableCell align="center">{row.margeReject}</TableCell>
                    <TableCell align="center">{row.total}</TableCell>
                    <TableCell align="center">{row.remark}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell
                    colSpan={6}
                    align="center"
                    className="font-bold"
                  ></TableCell>
                  <TableCell colSpan={2} align="center" className="font-bold">
                    Total
                  </TableCell>
                  <TableCell align="center" className="font-bold">
                    {/* {totalQuantity} */} 60
                  </TableCell>
                  <TableCell colSpan={1}></TableCell>
                </TableRow>
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
              <div className="mb-[5px] mt-10 border-b border-black text-center" />
              <span>
                {role} <br />
              </span>
              {/* <span>Signature</span> */}
              <div />
            </div>
          ))}
        </div>
      </div>

      {/* Additional A4-specific styles */}
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
    </>
  );
};
export default Page;
