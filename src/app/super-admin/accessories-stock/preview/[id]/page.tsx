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



const rows = [
  {
    id: "1",
    no: "1",
    date: "27-10-2024",
    challan: "AB-0124",
    product: "Butam",
    qty: "10",
    unit: "pcs",
    price: "100tk",
    supplier: "AB Treaders",
    
  },
  {
    id: "2",
    no: "2",
    date: "27-10-2024",
    challan: "AB-0124",
    product: "Niddle",
    qty: "10",
    unit: "pcs",
    price: "100tk",
    supplier: "AB Treaders",
  },
  {
    id: "3",
    no: "3",
    date: "27-10-2024",
    challan: "AB-0124",
    product: "Pink Color",
    qty: "10",
    unit: "KG",
    price: "100tk",
    supplier: "AB Treaders",
  },
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
          <TopSection />
          <div className="flex justify-center">
            <h3 className="my-2 inline-block  bg-gray-400 px-1 uppercase text-white">
              Accessories Stock
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
                   <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  S. No
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Date
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Challan No.
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Product Name
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Quantity
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Unit
                </TableCell>
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Price
                </TableCell>
                
                <TableCell
                  align="center"
                  className="whitespace-nowrap text-white"
                  sx={{ color: "white" }}
                >
                  Supplier
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
                          padding: "8px",
                        },
                      }}
                    >
                      <TableCell align="center" className="whitespace-nowrap">
                    {row.no}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.date}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.challan}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.product}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.qty}
                  </TableCell>
                  
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.unit}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.price}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.supplier}
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
