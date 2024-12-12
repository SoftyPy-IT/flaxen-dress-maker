"use client";

import React from "react";
import flaxen from "../../../../../assets/images/logo/flaxen.png";
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
import PreviewTopSection from "@/components/shared/PreviewTopSection/PreviewTopSection";

function createData(
  id: number,
  product: string,
  qty: string,
  unit: string,
  price: string,

) {
  return {
    id,
    product,
    qty,
    unit,
    price,
  };
}

const rows = [createData(1, "Butam", "10", "pcs", "100tk")];

const signatureRoles = [
  "Receiver's Signature",
  "Receiver's Name",
  "Date",
  "",
  "Authorised Signature",
];

const Page = () => {
  return (
    <>
      <div className="a4-paper mx-auto bg-white p-5">
        <PreviewTopSection />

        <div className="mb-4 flex justify-center p-2">
          <h5 className="mx-auto mt-2 inline-block rounded-md  bg-gray-400 p-2 text-center font-bold uppercase text-white">
            Accessories Stock
          </h5>
        </div>

        <div className="mb-4 flex content-center items-center justify-between pl-[20px] pr-[60px]">
          <div className="space-y-2">
            <h5>
              Supplier Name:{" "}
              <span className="font-bold underline">Taludker</span>
            </h5>
            <h5>
              Challen No: <span className="font-bold underline">24579641</span>
            </h5>
          </div>
          <div className="space-y-2">
            <h5>
              Date: <span className="font-bold underline">05.05.2024</span>
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
                  <TableCell align="center" className="text-sm font-semibold">
                    SL. No.
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Product Name
                  </TableCell>
                
                  <TableCell align="center" className="text-sm font-semibold">
                  Quantity
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Unit
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Price
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
                        padding: "5px",
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        border: "1px solid black",
                      }}
                      align="center"
                    >
                      {row.id}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      align="center"
                    >
                      {row.product}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      align="center"
                    >
                      {row.qty}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      align="center"
                    >
                      {row.unit}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      align="center"
                    >
                      {row.price}
                    </TableCell>
                  </TableRow>
                ))}
                {/* <TableRow>
                  <TableCell
                    colSpan={2}
                    align="center"
                    className="font-bold"
                  ></TableCell>
                  <TableCell colSpan={1} align="center" className="font-bold">
                    Total
                  </TableCell>
                  <TableCell align="center" className="font-bold">
                     60
                  </TableCell>
                  <TableCell align="center" className="font-bold">
                     60
                  </TableCell>
                  <TableCell align="center" className="font-bold">
                   60
                  </TableCell>
                  <TableCell align="center" className="font-bold">
                    60
                  </TableCell>
                  <TableCell colSpan={4}></TableCell>
                </TableRow> */}
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
    </>
  );
};
export default Page;
