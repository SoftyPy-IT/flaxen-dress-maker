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
import Link from "next/link";
import { Tooltip } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import StockSendModal from "./StockSendModal";

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
    sstatus: "Send to Cutting",
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
    sstatus: "Not Send Yet",
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
    sstatus: "Send to Cutting",
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
    sstatus: "Send to Cutting",
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
    sstatus: "Decline From Cutting",
  },
];

const Stock = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer>
          <Table>
            <TableHead
            sx={{
                "& th": {
                  border: "1px solid rgba(224, 224, 224, 1)",
                  color: "white",
                  fontFamily: "'Quicksand-VariableFont_wght'",
                  fontWeight: "bold", 
                },
              }}
            >
              <TableRow className="bg-[#5D87FF]">
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
                  Cost (TK)
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Factory
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Chln. No
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
                  Recv.
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Remark
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Bin
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Send
                </TableCell>
                <TableCell align="center" className="whitespace-nowrap">
                  Action
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
                    {row.cost}
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
                  <TableCell align="center" className="whitespace-nowrap">
                    {row.sstatus}
                  </TableCell>
                  <TableCell
                    align="center"
                    className="space-x-2 whitespace-nowrap"
                  >
                    <Tooltip title="Send">
                      <button className="text-blue-600" onClick={handleOpen}>
                        <SendIcon fontSize="small" />
                      </button>
                    </Tooltip>

                    <Link href="/super-admin/fab-stock-reg/stock-preview">
                      <button className="text-blue-600">
                        <VisibilityIcon fontSize="small" />
                      </button>
                    </Link>
                    <Link href={`/super-admin/fab-stock-reg/${row.id}`}>
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
      {open && <StockSendModal open={open} setOpen={handleClose} />}
    </>
  );
};

export default Stock;
