"use client";
import * as React from "react";
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
import TopSection from "@/components/shared/TopSection/TopSection";
import EditIcon from "@mui/icons-material/Edit";

const rows = [
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remarks: "2134rf",
  },
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remarks: "2134rf",
  },
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remarks: "2134rf",
  },
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remarks: "2134rf",
  },
  {
    id: "1",
    date: "27-10-2024",
    name: "John Doe",
    buyerName: "John Doe",
    style: 234234,
    orderNo: "L.DRESS",
    sampleType: "Pick",
    sampleQuantity: 50,
    sewingStartTime: "08:00 AM",
    remarks: "2134rf",
  },
];

const signatureRoles = [
  "Cutting Supervisor",
  "Sewing/Finishing Supervisor",
  "Floor Incharge",
  "Production Manager",
  "Store Officer",
];
const page = () => {
  return (
  
      <>
        {/* a4 Portrait - 297mm x 210mm */}
        {/* a4 landscape - 210mm x 297mm */}
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
                Sample
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
                        "Name",
                        "Buyer Name",
                        "Order No",
                        "Style",
                        "Sample Type",
                        "Sample Quantity",
                        "Sewing Start Time",
                        "Remarks",
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
                        <TableCell align="center" className="whitespace-nowrap">
                          {row.date}
                        </TableCell>
                        <TableCell align="center" className="whitespace-nowrap">
                          {row.name}
                        </TableCell>
                        <TableCell align="center" className="whitespace-nowrap">
                          {row.buyerName}
                        </TableCell>
                        <TableCell align="center" className="whitespace-nowrap">
                          {row.style}
                        </TableCell>
                        <TableCell align="center" className="whitespace-nowrap">
                          {row.orderNo}
                        </TableCell>
                        <TableCell align="center" className="whitespace-nowrap">
                          {row.sampleType}
                        </TableCell>
                        <TableCell align="center" className="whitespace-nowrap">
                          {row.sampleQuantity}
                        </TableCell>
                        <TableCell align="center" className="whitespace-nowrap">
                          {row.sewingStartTime}
                        </TableCell>
                        <TableCell align="center" className="whitespace-nowrap">
                          {row.remarks}
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
            <Button
              variant="contained"
              disableElevation
              startIcon={<EditIcon />}
            >
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

export default page;
