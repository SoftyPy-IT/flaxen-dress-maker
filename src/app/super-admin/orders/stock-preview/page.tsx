"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import flaxen from "../../../../assets/images/logo/flaxen.png";
import Image from "next/image";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import TopSection from "@/components/shared/TopSection/TopSection";

const rows = [
  {
    id: "1",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    factory: "Adury",
    challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    received: "...",
    remark: "...",
    bin: "Cutting",
  },
  {
    id: "2",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    factory: "Adury",
    challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    received: "...",
    remark: "...",
    bin: "Cutting",
  },
  {
    id: "3",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    factory: "Adury",
    challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    received: "...",
    remark: "...",
    bin: "Cutting",
  },
  {
    id: "4",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    factory: "Adury",
    challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    received: "...",
    remark: "...",
    bin: "Cutting",
  },
  {
    id: "5",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: 123,
    color: "Black",
    cost: "288332",
    factory: "Adury",
    challanNo: 123,
    dio: 12323,
    roll: 25,
    fab: "4/j",
    gsm: 160,
    gwe: 616,
    fwe: 620,
    received: "...",
    remark: "...",
    bin: "Cutting",
  },
];

const page = () => {
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
                        padding:"8px",
                        background:"#5D87FF",   
                        color: "white",  
                      },
                    }}
                  >
                    <TableCell align="center" className="whitespace-nowrap">
                      Date
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      Buyer
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      Order No
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      Color
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      Cost
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      Factory
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      Challan No
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      Dio
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      Roll
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      Fab
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      G.S.M
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      G.W.E
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      F.W.E
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      Received
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      Remark
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      Bin
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
                          padding:"8px",
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
                        {row.OrderNo}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.color}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.cost} Tk
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.factory}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.challanNo}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.dio}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.roll}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.fab}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.gsm}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.gwe}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.fwe}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.received}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.remark}
                      </TableCell>
                      <TableCell align="center" className="whitespace-nowrap">
                        {row.bin}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
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
      </div>
    </>
  );
};

export default page;
