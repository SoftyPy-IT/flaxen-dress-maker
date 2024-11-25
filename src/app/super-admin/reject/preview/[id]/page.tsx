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
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

const rows = [
  {
    id: "1",
    no: "1",
    order: "AB-0124",
    item: "Bottom",
    color: "Pink",
    name: "John Doe",
    style: "SIT",
    line: 6,
    floor: 5,
    reject: "John Doe",
    total: "05",
    remark: "25",
    details: "reject for wrong swing",
  },
  {
    id: "2",
    no: "2",
    order: "AB-0124",
    item: "Bottom",
    color: "Pink",
    name: "John Doe",
    style: "SIT",
    line: 6,
    floor: 5,
    reject: "John Doe",
    total: "05",
    remark: "25",
    details: "reject for wrong swing",
  },
  {
    id: "3",
    no: "3",
    order: "AB-0124",
    item: "Bottom",
    color: "Pink",
    name: "John Doe",
    style: "SIT",
    line: 6,
    floor: 5,
    reject: "John Doe",
    total: "05",
    remark: "25",
    details: "reject for wrong swing",
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
              Reject
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
                      >
                        S. No
                      </TableCell>
                      <TableCell
                        align="center"
                        className="whitespace-nowrap text-white"
                        sx={{ color: "white" }}
                      >
                        Order No
                      </TableCell>
                      <TableCell
                        align="center"
                        className="whitespace-nowrap text-white"
                        sx={{ color: "white" }}
                      >
                        Lot No
                      </TableCell>
                      <TableCell
                        align="center"
                        className="whitespace-nowrap text-white"
                        sx={{ color: "white" }}
                      >
                        Color
                      </TableCell>
                      <TableCell
                        align="center"
                        className="whitespace-nowrap text-white"
                        sx={{ color: "white" }}
                      >
                        Style No
                      </TableCell>
                      <TableCell
                        align="center"
                        className="whitespace-nowrap text-white"
                        sx={{ color: "white" }}
                      >
                        Line NO
                      </TableCell>
                      <TableCell
                        align="center"
                        className="whitespace-nowrap text-white"
                        sx={{ color: "white" }}
                      >
                        Floor
                      </TableCell>
                      <TableCell
                        align="center"
                        className="whitespace-nowrap text-white"
                        sx={{ color: "white" }}
                      >
                        Who Reject
                      </TableCell>
                      <TableCell
                        align="center"
                        className="whitespace-nowrap text-white"
                        sx={{ color: "white" }}
                      >
                        Total Reject
                      </TableCell>
                      <TableCell
                        align="center"
                        className="whitespace-nowrap text-white"
                        sx={{ color: "white" }}
                      >
                        Remark
                      </TableCell>
                      <TableCell
                        align="center"
                        className="whitespace-nowrap text-white"
                        sx={{ color: "white" }}
                      >
                        Details
                      </TableCell>
                      
                    </TableRow>
               
                </TableHead>

                <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      "& td": {
                        borderBottom: "1px solid rgba(224, 224, 224, 1)",
                      },
                    }}
                  >
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.no}
                    </TableCell>
                    {/* <TableCell align="center" className="whitespace-nowrap">
                      {row.name}
                    </TableCell> */}
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.order}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.item}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.color}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.style}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.line}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.floor}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.reject}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.total}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.remark}
                    </TableCell>
                    <TableCell align="center" className="whitespace-nowrap">
                      {row.details}
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
