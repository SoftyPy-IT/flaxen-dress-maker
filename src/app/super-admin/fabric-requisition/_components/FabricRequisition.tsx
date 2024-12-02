"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

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

const FabricRequisition = () => {
  return (
    <>
    
      
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead
              sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                  color:"white"
                },
              }}
            >
              <TableRow className="bg-[#5D87FF]">
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
                  color:"white"
                },
              }}
            >
              <TableRow className="bg-[#5D87FF]">
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
                <TableCell align="center" className="whitespace-nowrap">
                  ACTION
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
                  <TableCell
                    align="center"
                    className="space-x-2 whitespace-nowrap"
                  >
                    <Link href={`/super-admin/fabric-requisition/requisition-preview/${row.id}`}>
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
                    <Link href={`/super-admin/fabric-requisition/${row.id}`}>
                      <button className="text-green-600">
                        <EditIcon fontSize="small" />
                      </button>
                    </Link>
                    <button className="text-red-600">
                      <DeleteIcon fontSize="small" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};



export default FabricRequisition;