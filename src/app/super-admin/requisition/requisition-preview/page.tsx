"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import flaxen from "../../../../../public/images/logos/flaxen.png";
import Image from "next/image";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import PrintIcon from "@mui/icons-material/Print";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

const rows = [
  {
    id: "1",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: "123",
    color: "Red",
    item: "Item",
    gsm: "250",
    kg: "250",
    rcv: "250",
    blance: "1.2",
    kg2: "250",
    rcv2: "250",
    blance2: "1.2",
    pl: "250",
    total: "234",
    remark: "25",
  },
  {
    id: "1",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: "123",
    color: "Red",
    item: "Item",
    gsm: "250",
    kg: "250",
    rcv: "250",
    blance: "1.2",
    kg2: "250",
    rcv2: "250",
    blance2: "1.2",
    pl: "250",
    total: "234",
    remark: "25",
  },
  {
    id: "1",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: "123",
    color: "Red",
    item: "Item",
    gsm: "250",
    kg: "250",
    rcv: "250",
    blance: "1.2",
    kg2: "250",
    rcv2: "250",
    blance2: "1.2",
    pl: "250",
    total: "234",
    remark: "25",
  },
  {
    id: "1",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: "123",
    color: "Red",
    item: "Item",
    gsm: "250",
    kg: "250",
    rcv: "250",
    blance: "1.2",
    kg2: "250",
    rcv2: "250",
    blance2: "1.2",
    pl: "250",
    total: "234",
    remark: "25",
  },
  {
    id: "1",
    date: "27-10-2024",
    buyer: "John Doe",
    OrderNo: "123",
    color: "Red",
    item: "Item",
    gsm: "250",
    kg: "250",
    rcv: "250",
    blance: "1.2",
    kg2: "250",
    rcv2: "250",
    blance2: "1.2",
    pl: "250",
    total: "234",
    remark: "25",
  },
];

const page = () => {
  return (
    <DefaultLayout>
      <div className="mb-5 text-center">
        <div className="mb-3 flex items-center justify-center gap-2">
          <Image src={flaxen} alt="img" className="h-10 w-10" />
          <h1>Flaxen Dress Maker Ltd</h1>
        </div>
        <p>
          Factory: Meghdubi; Ward-40, Gazipur City Corporation, Gazipur-1700,
          Bangladesh
        </p>
        <p>Corporate Office : House# 35, Road# 9, Sector# 15, Uttara, Dhaka</p>
        <p>
          Phone : +880-2-8913263, 8916198, Fax : +88-02-8913263 E-mail :
          flaxen@flaxengroup.com, Web : www.flaxengroup.com
        </p>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                },
              }}
            >
              <TableRow>
                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                  colSpan={6}
                ></TableCell>
                <TableCell
                  align="center"
                  colSpan={2}
                  className="whitespace-nowrap"
                >
                  BODY FABRIC
                </TableCell>

                <TableCell
                  align="center"
                  className="whitespace-nowrap"
                ></TableCell>
                <TableCell
                  align="center"
                  colSpan={2}
                  className="whitespace-nowrap"
                >
                  RIB & COLOR
                </TableCell>
                <TableCell
                  align="center"
                  colSpan={5}
                  className="whitespace-nowrap"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableHead
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                },
              }}
            >
              <TableRow>
                <TableCell align="center" className="whitespace-nowrap">
                  DATE
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  BUYER
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  OR/NO
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  COLOR
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  F/ITEM
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  GSM
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  REQ/KG
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  F/RCV/KG
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  BLANCE
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  REQ/KG
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  F/RCV/KG
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  BLANCE
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  P/L
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  TOTAL/KG
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  REMARKS
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
                    {row.item}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.gsm}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.kg}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.rcv}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.blance}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.kg2}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.rcv2}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.blance}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.pl}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.total}
                  </TableCell>
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.remark}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <div className="mt-5 flex justify-end gap-5">
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

export default page;
