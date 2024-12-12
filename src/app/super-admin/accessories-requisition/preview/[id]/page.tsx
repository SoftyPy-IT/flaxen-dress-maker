"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import TopSection from "@/components/shared/TopSection/TopSection";
import EditIcon from "@mui/icons-material/Edit";
import PreviewTopSection from "@/components/shared/PreviewTopSection/PreviewTopSection";





function createData(
  id: number,
  name:string,
  color: string,
  styleNo: string,
  line: string,
  floor: string,
  time: string,
  items:string,
  remark: string,
) {
  return {
    id,
    name,
    color,
    styleNo,
    line,
    floor,
    time,
    items,
    remark
  };
}


   

const rows = [
  createData(
    1,
    "Niddle",
    "Pink",
    "XL",
    "Line 1",
    "1",
    "10:00 AM",  
    "10", 
    "No issues",
  ),
  createData(
    2,
    "Niddle",
    "Pink",
    "XL",
    "Line 1",
    "1",
    "10:00 AM",
    "10", 
    "Pending",
  ),
  createData(
    3,
    "Niddle",
    "Pink",
    "XL",
    "Line 1",
    "1",
    "10:00 AM",
    "10", 
    "Pending",
  ),
  createData(
    4,
    "Niddle",
   "Pink",
    "XL",
    "Line 1",
    "1",
    "10:00 AM",
    "10", 
    "Pending",
  ),
];

const signatureRoles = [
  "Receiver's Signature",
  "Receiver's Name",
  "Date",
  "",
  "Authorised Signature",
];

const Preview = () => {
  return (
    <>
      {/* 210mm x 297mm */}
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
      <div className="a4-paper mx-auto mb-20">
        <div className="a4-paper mx-auto bg-white p-5">
         
          <PreviewTopSection />

        <div className="mb-4 flex justify-center p-2">
          <h5 className="mx-auto mt-2 inline-block rounded-md  bg-gray-400 p-2 text-center font-bold uppercase text-white">
          Accessories Requisition
          </h5>
        </div>
          <div className="mb-4 flex content-center items-center justify-between pl-[20px] pr-[60px]">
            <div className="space-y-2">
              <h5>
                Buyer Name:{" "}
                <span className="font-bold underline">Taludker</span>
              </h5>
              <h5>
                Order No: <span className="font-bold underline">24579641</span>
              </h5>
              <h5>
                Quantity: <span className="font-bold underline">1245</span>
              </h5>
            </div>
            <div className="space-y-2">
              <h5>
                Date: <span className="font-bold underline">05.05.2024</span>
              </h5>
              <h5>
                CHLN No: <span className="font-bold underline">12456</span>
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
                        padding: "15px",
                      },
                    }}
                  >
                    {[
                      "SL. No",                      
                      "Product",
                      "Color",
                      "Style No",
                      "Line",
                      "Floor",
                      "Time",
                      "Items",
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
                  {rows.map((row, index) => (
                    <TableRow
                      key={row.id}
                      sx={{
                        "& td": {
                          border: "1px solid rgba(224, 224, 224, 1)",
                          padding: "5px",
                        },
                      }}
                    >
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.id}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.name}
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
                        {row.items}
                      </TableCell>                      
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.remark}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                  <TableCell
                    colSpan={6}
                    align="center"
                    className="font-bold"
                  ></TableCell>
                  <TableCell colSpan={1} align="center" className="font-bold">
                    Total
                  </TableCell>
                  
                  <TableCell align="center" className="font-bold">
                    60
                  </TableCell>
                  <TableCell colSpan={4}></TableCell>
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
