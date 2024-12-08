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
import PhoneIcon from "@mui/icons-material/Phone";
import FaxIcon from "@mui/icons-material/Fax";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";
import EditIcon from "@mui/icons-material/Edit";
import TopSection from "@/components/shared/TopSection/TopSection";

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
  remark: string,
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

const srows = [
  createData(
    1,
    "John Doe",
    "ORD001",
    "10",
    "Pink",
    "STY001",
    "1",
    "1",
    "2024-10-30",
    "10",
    "No issues",
  ),
  createData(
    2,
    "Jane Smith",
    "ORD002",
    "10",
    "Pink",
    "STY002",
    "2",
    "2",
    "2024-10-30",
    "11",
    "Pending",
  ),
  createData(
    3,
    "Jane Smith",
    "ORD003",
    "10",
    "Pink",
    "STY003",
    "3",
    "3",
    "2024-10-30",
    "11",
    "Pending",
  ),
  createData(
    4,
    "Jane Smith",
    "ORD004",
    "10",
    "Pink",
    "STY004",
    "4",
    "4",
    "2024-10-30",
    "11",
    "Pending",
  ),
];

const Page = () => {
  return (
    <>
      <div className="a4-paper mx-auto bg-white p-5">
        <TopSection />

        <div className="mb-4 flex justify-center p-2">
          <h5 className="mx-auto mt-2 inline-block rounded-md  bg-blue-500 p-2 text-center font-bold uppercase text-white">
            Cutting Register
          </h5>
        </div>

        <div className="mb-4 flex content-center items-center justify-between pl-[20px] pr-[60px]">
          <h5>
            Date: <span className="font-bold underline">05.05.2024</span>
          </h5>
          <h5>
            Buyer Name: <span className="font-bold underline">Taludker</span>
          </h5>
          <h5>
            Order No: <span className="font-bold underline">24579641</span>
          </h5>
          <h5>
            Quantity: <span className="font-bold underline">1245</span>
          </h5>
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
                    Color
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Size/Style
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Total
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Fabric Req.
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Fabric Rcv.
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Fabric/Item GSM
                  </TableCell>
                  <TableCell align="center" className="text-sm font-semibold">
                    Consumption
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {srows.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{
                      "& td": {
                        border: "1px solid rgba(224, 224, 224, 1)",
                      },
                    }}
                  >
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      align="center"
                    >
                      {row.color}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      align="center"
                    >
                      {row.styleNo}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      align="center"
                    >
                      {row.line}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      align="center"
                    >
                      {row.floor}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      align="center"
                    >
                      {row.date}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      align="center"
                    >
                      {row.time}
                    </TableCell>
                    <TableCell
                      sx={{ border: "1px solid black" }}
                      align="center"
                    >
                      {row.remark}
                    </TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell
                    colSpan={1}
                    align="center"
                    className="font-bold"
                  ></TableCell>
                  <TableCell colSpan={1} align="center" className="font-bold">
                    Total
                  </TableCell>
                  <TableCell align="center" className="font-bold">
                    {/* {totalQuantity} */} 60
                  </TableCell>
                  <TableCell align="center" className="font-bold">
                    60
                  </TableCell>
                  <TableCell colSpan={3}></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>

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
