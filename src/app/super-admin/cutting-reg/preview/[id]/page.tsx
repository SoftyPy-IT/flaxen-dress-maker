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
      <div className="text-center mb-4">
        <div className="flex gap-2 items-center justify-center">
          <Image src={flaxen} alt="img" className="h-10 w-10" />
          <h1>Flaxen Dress Maker Ltd</h1>
        </div>
        <p>
          Factory: Meghdubi; Ward-40, Gazipur City Corporation, Gazipur-1700,
          Bangladesh
        </p>
        <p>Corporate Office: House# 35, Road# 9, Sector# 15, Uttara, Dhaka</p>
        <p>
          Phone: +880-2-8913263, 8916198, Fax: +88-02-8913263 E-mail:
          flaxen@flaxengroup.com, Web: www.flaxengroup.com
        </p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <h5>Sl. No. </h5>

        <h2 className="text-center">Cutting Register</h2>
        <h2 className="text-center"></h2>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="customized table">
          <TableHead>
            <TableRow
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
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
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {signatureRoles.map((role, index) => (
          <div key={index}>
            <div className="text-center mb-[10px] border-b border-black mt-10" />
            <span>{role} </span>
            <span>Signature</span>
            <div />
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-5 mt-5">
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

export default Preview;
